import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import {MapComponent} from "./map/map.component";
import { ListComponent } from './list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './from-event/from-event.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableComponent,  children: [
      {path: '', component: ListComponent},
      {path: 'from-event', component: FromEventComponent},
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
export class AppRoutingModule { }
