import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { MessageService } from '@services/message.service';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { BehaviorSubjectTestComponent } from './behavior-subject-test/behavior-subject-test.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    BehaviorSubjectComponent,
    BehaviorSubjectTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
