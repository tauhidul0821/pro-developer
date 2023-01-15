import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { IUsers } from '@models/users.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messageStore = new Subject<IUsers>();


  constructor() { }

  message(value:IUsers): void {
    this.messageStore.next(value)
  }
}
