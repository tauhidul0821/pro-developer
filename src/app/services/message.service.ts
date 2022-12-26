import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // public messageStore$ = new Subject<string>();
  public messageStore$ = new BehaviorSubject<string>('Awesome');


  constructor() { }

  message(value:string): void {
    this.messageStore$.next(value)
  }
}
