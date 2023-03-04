import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public messageStore = new Subject<any>();
}
