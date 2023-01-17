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

import { OfFromComponent } from '@app/of-from/of-from.component';
import { PluckComponent } from '@app/pluck/pluck.component';
import { RetryComponent } from '@app/retry/retry.component';
import { DebounceTimeComponent } from '@app/debounce-time/debounce-time.component';
import { ReplaySubjectComponent } from '@app/replay-subject/replay-subject.component';
import { ShareReplayComponent } from '@app/share-replay/share-replay.component';

import { FilterComponent } from '@app/filter/filter.component';
import { AsyncSubjectComponent } from '@app/async-subject/async-subject.component';
import { ConcatMergeComponent } from '@app/concat-merge/concat-merge.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableComponent,  children: [
      {path: '', component: ListComponent},
      {path: 'from-event', component: FromEventComponent},
      {path: 'subject', component: SubjectComponent},
      {path: 'interval', component: IntervalComponent},
      {path: 'of-from', component: OfFromComponent},
      {path: 'pluck', component: PluckComponent},
      {path: 'retry', component: RetryComponent},
      {path: 'debounce', component: DebounceTimeComponent},
      {path: 'replay-subject', component: ReplaySubjectComponent},
      {path: 'share-replay', component: ShareReplayComponent},
      {path: 'filter', component: FilterComponent},
      {path: 'async-subject', component: AsyncSubjectComponent},
      {path: 'concat-merge', component: ConcatMergeComponent},
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
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
    IntervalComponent,
    OfFromComponent,
    PluckComponent,
    RetryComponent,
    DebounceTimeComponent,
    ReplaySubjectComponent,
    ShareReplayComponent,
    FilterComponent,
    AsyncSubjectComponent,
    ConcatMergeComponent
  ];
}
