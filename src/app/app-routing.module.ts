import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '@app/about/about.component';
import { HomeComponent } from '@app/home/home.component';
import { MessageComponent } from '@app/message/message.component';
import {MapComponent} from '@app/map/map.component';
import { ListComponent } from '@app/list/list.component';
import { ObservableComponent } from '@app/observable/observable.component';
import { FromEventComponent } from '@app/from-event/from-event.component';
import { SubjectComponent } from '@app/subject/subject.component';
import { IntervalComponent } from '@app/interval/interval.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableComponent,  children: [
      {path: '', component: ListComponent},
      {path: 'from-event', component: FromEventComponent},
      {path: 'interval', component: IntervalComponent},
      {path: 'subject', component: SubjectComponent}
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'observable', component: ObservableComponent, children: [
      {path: '', component: ListComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static components = [
    AboutComponent,
    MessageComponent,
    HomeComponent,
    MapComponent,
    ListComponent,
    FromEventComponent,
    ObservableComponent,
    SubjectComponent,
    IntervalComponent
  ];
}
