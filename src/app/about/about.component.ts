import {Component, OnInit} from '@angular/core';
import {MessageService, IUsers} from '@services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  users: IUsers;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.messageStore.subscribe((res) => {
      // console.log('about :- ', res);
      this.users = res;
    });
  }
}
