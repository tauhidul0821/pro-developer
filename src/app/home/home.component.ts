import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.messageStore$.subscribe(res => {
      this.message = res;
    })
  }

}
