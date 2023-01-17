import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import { IUsers } from '@models/users.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messageStore = new BehaviorSubject<any>(null);


  constructor() { }

  message(value:IUsers): void {
    this.messageStore.next(value)
  }
}
