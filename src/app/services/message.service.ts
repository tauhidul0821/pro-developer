import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { IUsers } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messageStore = new Subject<any>();


  constructor() { }

  message(value:IUsers): void {
    this.messageStore.next(value)
  }
}
