import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {MessageService} from '@services';
import {BehaviorSubjectComponent} from './behavior-subject/behavior-subject.component';
import {BehaviorSubjectTestComponent} from './behavior-subject-test/behavior-subject-test.component';
import {SortComponent} from './sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    BehaviorSubjectComponent,
    BehaviorSubjectTestComponent,
    SortComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
