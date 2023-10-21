import { Injectable } from '@angular/core';

export class Track{
  name: string = '';
  value: string = '' ;
  location?: any = '';
}

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private tracks: Track[] = [
    {name: 'Showtime', value: 'showtime', location: null},
    {name: 'Auburndale', value: 'auburndale', location: null},
    {name: 'Orlando Speed World', value: 'orlando', location: null},
    {name: 'East Bay', value: 'eastbay', location: null},
    {name: 'Bradenton Motorsports Park', value: 'bradenton', location: null},
  ];


  constructor() {
  }

  getTracks(){
    return this.tracks;
  }
}
