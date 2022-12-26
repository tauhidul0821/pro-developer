import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messageStore = new Subject<string>();


  constructor() { }

  message(value:string): void {
    console.log('message service called ...');
    this.messageStore.next(value)
    console.log('messageStore', this.messageStore);
  }
}
