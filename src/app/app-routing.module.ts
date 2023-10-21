import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {TickerComponent} from "./components/ticker/ticker.component";
import {TrackLoaderComponent} from "./components/track-loader/track-loader.component";

const routes: Routes = [
  {path: '', redirectTo: 'ticker', pathMatch: 'full'},
  {path: 'track', component: TrackLoaderComponent},
  {path: 't/:track', component: TickerComponent},
  {path: 'track/:track', component: TickerComponent},
  {path: 'demo', component: TickerComponent},
  {path: 'ticker', component: TickerComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
