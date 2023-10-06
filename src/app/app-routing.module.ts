import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {TickerComponent} from "./ticker/ticker.component";

const routes: Routes = [
  { path: 'ticker', component: TickerComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
