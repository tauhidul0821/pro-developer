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
    console.log('first time call this functionLL:L');
  }
}
