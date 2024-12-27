import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataShareService} from '@app/services/data-share.service';
import {MessageService} from '@app/services/message.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss'],
  standalone: false
})
export class BehaviorSubjectComponent implements OnInit {
  constructor(private dataShareService: DataShareService) {}
  @ViewChild('fondovalor') fondovalor: ElementRef;

  ngOnInit(): void {}

  saveMessage() {
    let obj = {
      name: this.fondovalor.nativeElement.value,
      age: 25 //Math.floor((Math.random() * 60) + 1)
    };
    this.dataShareService.saveData.next(obj);
  }
}
