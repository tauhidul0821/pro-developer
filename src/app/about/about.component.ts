import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  message: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.messageStore.subscribe(res => {
      console.log('about :- ', res);
      this.message = res;
    });
  }

}
