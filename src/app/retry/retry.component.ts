import {Component, DestroyRef, OnInit, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {take, switchMap, retryWhen, delay, scan} from 'rxjs/operators';
import {RetryDataService} from '@services';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person: IUsers;
  status: string = 'No Data';
  destroyRef = inject(DestroyRef);

  constructor(private http: HttpClient, private retryDataService: RetryDataService) {}

  ngOnInit(): void {}

  fetchData() {
    this.status = 'Fetching data...';
    this.retryDataService
      .getRetryData()
      .pipe(
        switchMap((res: any) => res),
        take(1),
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount: any) => {
              console.log(retryCount);
              if (retryCount >= 4) {
                this.status = 'Data fatching failed';
                throw err;
              } else {
                retryCount = retryCount + 1;
                this.status = `Retrying Attempt #${retryCount}`;
              }
              return retryCount;
            }, 0)
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((res: any) => {
        this.status = 'Success';
        this.person = res;
      });
  }
}

interface IUsers {
  id: number;
  name: string;
  userName: string;
  email: string;
  website: string;
}
