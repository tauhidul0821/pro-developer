import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { MessageService } from './services/message.service';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MessageComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
