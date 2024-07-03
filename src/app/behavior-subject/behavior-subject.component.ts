import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RetryDataService} from '@app/services';
import {DataShareService} from '@app/services/data-share.service';
import {MessageService} from '@app/services/message.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {
  constructor(private dataShareService: DataShareService, private retryDataService: RetryDataService) {}
  @ViewChild('fondovalor') fondovalor: ElementRef;
  users: any[] = [];

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.retryDataService.users$.subscribe((users) => {
      this.users = users;
      console.log('A :- ', users);
    });
    this.retryDataService.fetchUsers();
  }

  saveMessage() {
    this.retryDataService.updateUser();
    // let obj = {
    //   name: this.fondovalor.nativeElement.value,
    //   age: 25 //Math.floor((Math.random() * 60) + 1)
    // };
    // this.dataShareService.saveData.next(obj);
  }
}
