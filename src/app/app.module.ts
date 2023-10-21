import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { TickerComponent } from './components/ticker/ticker.component';
import { TrackLoaderComponent } from './components/track-loader/track-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    TrackLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
