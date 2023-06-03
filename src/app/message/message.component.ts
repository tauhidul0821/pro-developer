import {Component, OnInit} from '@angular/core';
import {MessageService} from '@services';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  saveMessage(message: any) {
    this.messageService.messageStore.next(message.value);
    // this.messageService.message(message.value);
    // console.log(message.value);
  }
}
