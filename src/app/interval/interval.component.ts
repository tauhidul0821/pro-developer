import {Component, OnInit} from '@angular/core';
import {DesignService} from '@app/services/design.service';
import {Subscription, timer} from 'rxjs';
import {interval} from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  intervalMsg: string;
  timerValMsg: string;
  intervalVideoSubscription: Subscription;
  timerValVideoSubscription: Subscription;

  constructor(private designService: DesignService) {}

  ngOnInit(): void {
    this.intervalExample();
    this.timerExample();
  }

  intervalExample() {
    const broadCastVideos = interval(1000);
    this.intervalVideoSubscription = broadCastVideos.subscribe((res) => {
      console.log(res);
      this.designService.print(`Videos ${res}`, 'contain1');

      if (res >= 4) {
        this.intervalVideoSubscription.unsubscribe();
      }
    });
  }

  timerExample() {
    const timerStrim = timer(6000, 1000);

    this.timerValVideoSubscription = timerStrim.subscribe((res) => {
      console.log(`Timer ex ${res}`);

      this.designService.print(`Timer ex ${res}`, 'contain2');

      if (res >= 4) {
        this.timerValVideoSubscription.unsubscribe();
      }
    });
  }
}
