import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {filter, take, tap, map, switchMap, toArray, retry, retryWhen, delay, scan, takeUntil} from 'rxjs/operators';
import {Subject, Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetryDataService {
  rightUrl: string = 'https://jsonplaceholder.typicode.com/users';
  wrongUrl: string = 'https://jsonplaceholder.typicode.com/users-wrong';
  myServer: string = 'http://localhost:3000/users';

  private usersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public users$: Observable<any[]> = this.usersSubject.asObservable();
  private hasFetched: boolean = false;

  constructor(private http: HttpClient) {}

  getRetryData(): Observable<any> {
    return this.http.get<any>(this.rightUrl);
  }

  fetchUsers(): void {
    if (!this.hasFetched) {
      this.http
        .get<any[]>(this.rightUrl)
        .pipe(
          tap((users) => {
            this.usersSubject.next(users);
            this.hasFetched = true;
          })
        )
        .subscribe();
    }
  }

  updateUser(): void {
    const modifyObj = {
      name: 'Tauhidul',
      username: 'Islam'
    };
    this.http
      .put(this.rightUrl + '/1', modifyObj)
      .pipe(
        tap(() => {
          this.hasFetched = false; // Reset the fetch flag
          this.fetchUsers(); // Refresh the user data
        })
      )
      .subscribe();
  }
}
