import {Component, OnInit} from '@angular/core';
import {HighlighDirective} from './highligh.directive';
import {Observable, from, Subject} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-custom-directive',
  imports: [HighlighDirective, AsyncPipe],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.scss'
})
export class CustomDirectiveComponent {
  time: Observable<string>;
  subject: Subject<number> = new Subject<number>();

  source: Observable<number> = from([1, 2, 3, 4]);

  constructor() {
    this.time = new Observable((observer) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });

    this.subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    this.subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    this.subject.next(1);
    this.subject.next(2);
  }
}
