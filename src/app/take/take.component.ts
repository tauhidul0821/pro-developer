import { Component, OnInit } from '@angular/core';
import { DesignService } from '@app/services/design.service';
import { from, fromEvent, interval, Observable, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  nameSource: Observable<string>;
  intervalSource: Observable<any>;

  constructor(private designService: DesignService) {}

  randomNames = [
    'Tauhidul',
    'Khadiza',
    'Maleka',
    'Shahidul',
    'Alif',
    'Azmir',
    'Arafat',
    'Arosh',
    'jara',
    'mahin',
    'Raju',
    'Rabbi',
    'Yousuf',
  ];

  ngOnInit(): void {
    this.nameSource = from(this.randomNames);
    this.takeExample();
    this.takeLastExample();
    this.takeUntilExample();
  }

  takeUntilExample() {
    console.log('takeUntilExample:: ');
    this.intervalSource = interval(1000);

    let condition1 = timer(6000);
    let condition2 = fromEvent(document, 'click');

    this.intervalSource
      .pipe(
        map((res) => 'Number ' + res),
        takeUntil(condition1)
      )
      .subscribe((res) => {
        this.designService.print(res, 'elContainer3');
      });
  }

  takeLastExample() {
    this.nameSource.pipe(takeLast(3)).subscribe((res) => {
      this.designService.print(res, 'elContainer2');
    });
  }

  takeExample() {
    this.nameSource.pipe(take(5)).subscribe((res) => {
      this.designService.print(res, 'elContainer1');
    });
  }
}
