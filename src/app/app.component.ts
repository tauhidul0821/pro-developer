import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pro-developer';
  obj = {
    name: 'tauhidshff',
    age: 24
  };

  ngOnInit(): void {
    const data1 = {
      age: 12,
      name: 'tauhidul'
    };
    const data2 = {
      age: 44,
      name: 'Fun'
    };
    console.log('first time call this functionLL:L');
    this.allArgAccept('awesome', data1, data2);
  }

  allArgAccept(title: string, ...data: any): void {
    console.log('title :- ', title);
    const [data1, data2] = data;
    console.log('data1', data1);
    console.log('Data2', data2);
  }
}
