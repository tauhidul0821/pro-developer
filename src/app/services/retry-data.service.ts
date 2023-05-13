import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {filter, take, tap, map, switchMap, toArray, retry, retryWhen, delay, scan, takeUntil} from 'rxjs/operators';
import {Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RetryDataService {
  rightUrl: string = 'https://jsonplaceholder.typicode.com/users';
  wrongUrl: string = 'https://jsonplaceholder.typicode.com/users-wrong';
  myServer: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}
  getRetryData(): Observable<any> {
    return this.http.get<any>(this.wrongUrl);
  }
}
