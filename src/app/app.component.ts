import { Component, OnInit } from '@angular/core';
import { DataShareService } from './services/data-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pro-developer';
  obj={
    name: 'tauhidshff',
    age: 24
  }
  // constructor(private dataShareService: DataShareService){
  //   this.dataShareService.saveData.next(this.obj)
  //   console.log('Allahu akbar');
  // }

  ngOnInit(){
    console.log('first time call this functionLL:L');

  }
}
