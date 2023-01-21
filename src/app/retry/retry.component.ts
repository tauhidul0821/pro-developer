import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { filter,take,tap,map, switchMap, toArray, retry, retryWhen, delay, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person: IUsers;
  rightUrl: string = 'https://jsonplaceholder.typicode.com/users';
  wrongUrl: string = 'https://jsonplaceholder.typicode.com/users-wrong';
  status: string = 'No Data';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
// REF: https://stackoverflow.com/questions/51898005/rxjs6-filter-array-of-objects
  fetchData(){
    this.status = 'Fetching data...';
    this.http.get(this.rightUrl).pipe(
      switchMap((res: any) => res),
      take(1),
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount: any)=> {
          console.log(retryCount)
          if(retryCount >= 5){
            this.status = 'Data fatching failed';
            throw err;
          }else{
            retryCount = retryCount + 1;
            this.status = `Retrying Attempt #${retryCount}`;
          }
          return retryCount;

        },0)
      ))
    ).subscribe((res: any) => {
      this.person = res;
    })
  }

}

interface IUsers{
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}