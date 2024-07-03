import {Component, OnInit} from '@angular/core';
import {DataShareService} from '@app/services/data-share.service';
import {RetryDataService} from '@app/services/retry-data.service';

@Component({
  selector: 'app-behavior-subject-test2',
  templateUrl: './behavior-subject-test2.component.html'
})
export class BehaviorSubjectTest2Component implements OnInit {
  subjectData: any;
  showButtonClick: boolean = false;
  users: any[] = [];

  constructor(private dataShareService: DataShareService, private retryDataService: RetryDataService) {}

  // ngOnInit(): void {
  //   this.dataShareService.saveData.subscribe((res) => {
  //     this.subjectData = res;
  //     console.log('Allahu akbar', res);
  //   });
  // }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.retryDataService.users$.subscribe((users) => {
      this.users = users;
      console.log('B :- ', users);
    });
    this.retryDataService.fetchUsers();
  }
}
