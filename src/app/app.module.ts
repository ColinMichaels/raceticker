import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { TickerComponent } from './components/ticker/ticker.component';
import { TrackLoaderComponent } from './components/track-loader/track-loader.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeaderComponent } from './components/header/header.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environment/environment";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {TrackService} from "./services/track.service";
import {CsvService} from "./services/csv.service";

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    TrackLoaderComponent,
    SignInComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'RaceTicker'),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
