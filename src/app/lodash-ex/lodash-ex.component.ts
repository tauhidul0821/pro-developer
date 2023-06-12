import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash-ex',
  templateUrl: './lodash-ex.component.html',
  styleUrls: ['./lodash-ex.component.scss']
})
export class LodashExComponent implements OnInit {
  loadashCode = `
  const res = _.chunk(['a', 'b', 'c', 'd'],2)

  const res2 = _.chunk(['a', 'b', 'c', 'd'], 3);
  // console.log(res2);

  const res3 = _.difference(['a',1 , 2, 'b', 'c'], ['a', 2, 'b', 'c', 'd']);
  console.log(res3);
  `;

  ngOnInit(): void {
    const res = _.chunk(['a', 'b', 'c', 'd'], 2);

    const res2 = _.chunk(['a', 'b', 'c', 'd'], 3);
    // console.log(res2);

    const res3 = _.difference(['a', 'b', 'c'], ['a', 'd']);
    console.log(res3);
  }
}
