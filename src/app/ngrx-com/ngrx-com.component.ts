import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { UserListRequestAction, UserListSuccessAction } from 'src/actions/user-action';
import { getUserLoading, getUserLoaded, getUsers, getUserState, IRootReducerState } from '../../reducers';
import { combineLatest, take } from "rxjs";
import { IUsers } from '@app/models/users.model';

@Component({
  selector: 'app-ngrx-com',
  templateUrl: './ngrx-com.component.html',
  styleUrls: ['./ngrx-com.component.scss']
})
export class NgrxComComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient,
    private store: Store<IRootReducerState>) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const getUserData$ = this.store.select(getUsers);

    combineLatest([loading$, loaded$]).subscribe((data:any) =>{
      console.log('under combineLatest:- ', data);
      if(!data[0] && !data[1]){
        console.log('how many time under if');
        this.store.dispatch(new UserListRequestAction())
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
          console.log('2 time call :- ',res)
          this.store.dispatch(new UserListSuccessAction({data: res}))
        });
      }

    });
    
    
    getUserData$.subscribe((data) => {
      this.users = data;
      console.log('data from getUserData$', data);
    });
  }
}
