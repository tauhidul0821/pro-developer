import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {MessageService} from '@services';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AppRoutingModule.components],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
