import { Component, OnInit } from '@angular/core';
import { IUsers } from '@models/users.model';
import { MessageService } from '@services/message.service';
import {take} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: IUsers;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.messageStore.pipe(
      take(1)
    ).subscribe(res => {
     console.log('home component:-  :- ', res);
      this.users = res;

    })
  }

}
