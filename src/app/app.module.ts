import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {MessageService} from '@services';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorMessageComponent} from './angu-form/components/error-message/error-message.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AppRoutingModule.components, ErrorMessageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, GoogleMapsModule, FormsModule],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
