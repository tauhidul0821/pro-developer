import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { from, fromEvent, Observable } from 'rxjs';
import { toArray, filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  data01: IMember[];
  data2: IMember[];
  data3: IMember[];
  source: Observable<IMember>;

  constructor() {}

  selectOption(event: any) {
    this.filterByGender(event.target.value);
  }

  onKyUp(event: any, exNumber: string) {
    console.log(event.target.value, exNumber);
    if (exNumber === 'ex1') {
      this.filterByNameLength(event.target.value);
    } else {
      this.filterByNthNumber(event.target.value);
    }
  }

  dataArr = [
    { id: 1, name: 'Tauhidul', gender: 'Male' },
    { id: 2, name: 'Azmir', gender: 'Male' },
    { id: 3, name: 'Arafat', gender: 'Male' },
    { id: 4, name: 'Khadiza', gender: 'Female' },
    { id: 5, name: 'Towkir', gender: 'Male' },
    { id: 6, name: 'Tomal', gender: 'Male' },
    { id: 7, name: 'Jomila', gender: 'Female' },
    { id: 8, name: 'Faisal', gender: 'Male' },
    { id: 9, name: 'Jannati', gender: 'Female' },
    { id: 10, name: 'Anup', gender: 'Male' },
    { id: 11, name: 'Ashish', gender: 'Male' },
    { id: 12, name: 'Tania', gender: 'Female' },
    { id: 13, name: 'Neeraj', gender: 'Male' },
    { id: 14, name: 'Raju', gender: 'Male' },
    { id: 15, name: 'Rokeya', gender: 'Female' },
  ];

  ngOnInit(): void {
    this.source = from(this.dataArr);
    this.filterByNameLength(5);
    this.filterByGender('Male');
    this.filterByNthNumber(4);
  }

  filterByNthNumber(nthNumber: number) {
    this.source
      .pipe(
        filter((member: IMember) => member.id <= nthNumber),
        toArray()
      )
      .subscribe((res: IMember[]) => {
        this.data3 = res;
      });
  }

  filterByGender(gender: string) {
    this.source
      .pipe(
        filter((member: IMember) => member.gender === gender),
        toArray()
      )
      .subscribe((res: IMember[]) => {
        this.data2 = res;
      });
  }

  filterByNameLength(nameLength: number) {
    this.source
      .pipe(
        filter((member: IMember) => member.name.length >= nameLength),
        toArray()
      )
      .subscribe((res: IMember[]) => {
        this.data01 = res;
      });
  }
}

interface IMember {
  id: number;
  name: string;
  gender: string;
}
