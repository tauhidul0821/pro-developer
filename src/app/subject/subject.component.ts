import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  @ViewChild('fondovalor') fondovalor: ElementRef;

  ngOnInit(): void {}

  saveMessage($event: any) {
    let obj = {
      name: this.fondovalor.nativeElement.value,
      age: Math.floor(Math.random() * 60 + 1),
    };
    this.messageService.messageStore.next(obj);
  }
}
