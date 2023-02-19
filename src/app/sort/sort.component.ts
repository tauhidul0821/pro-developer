import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  data = of([
    {
      id: 'fba1c59d-1af9-4347-a761-7b7559447375',
      name: 'Peddling',
      details: 'Peddling',
      descriptionCategory: 'Merchant Type',
      displayPosition: 1,
    },
    {
      id: 'e672ad77-3990-4c3e-87e4-ce7c48a093c9',
      name: 'Retail',
      details: 'Retail',
      descriptionCategory: 'Merchant Type',
      displayPosition: 2,
    },
    {
      id: '1d99daed-4190-42ff-9617-1268940ab92d',
      name: 'Service Station',
      details: 'Service Station',
      descriptionCategory: 'Merchant Type',
      displayPosition: 0,
    },
    {
      id: 'fba1c59d-1af9-4347-a761-7b7559447379',
      name: 'Other',
      details: 'Other',
      descriptionCategory: 'Merchant Type',
      displayPosition: 3,
    },
  ]);
  constructor() {}

  ngOnInit(): void {
    this.data
      .pipe(
        map((data) => {
          data.sort((a, b) => {
            return a.displayPosition < b.displayPosition ? -1 : 1;
          });
          return data;
        })
      )
      .subscribe((x) => {
        console.log(x);
      });
  }
}
