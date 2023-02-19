import { Component, OnInit } from '@angular/core';
import { IUsers } from '@models/users.model';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: IUsers;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    console.log('awesomeee :- ');
    this.messageService.messageStore.subscribe((res) => {
      // console.log('home :- ', res);
      this.users = res;
    });
  }
}
