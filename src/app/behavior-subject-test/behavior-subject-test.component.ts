import { Component, OnInit } from '@angular/core';
import { DataShareService } from '@app/services/data-share.service';

@Component({
  selector: 'app-behavior-subject-test',
  templateUrl: './behavior-subject-test.component.html',
  styleUrls: ['./behavior-subject-test.component.scss']
})
export class BehaviorSubjectTestComponent implements OnInit {
  subjectData: any;
  showButtonClick: boolean = false;

  constructor(private dataShareService: DataShareService) { }

  ngOnInit(): void {
    
  }

  showData(){
    this.showButtonClick = true;
    this.dataShareService.saveData.subscribe(res => {
      this.subjectData = res;
      console.log('Allahu akbar', res);
    })

  }

}
