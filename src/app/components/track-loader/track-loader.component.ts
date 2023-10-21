import {Component, OnInit} from '@angular/core';
import {Track, TrackService} from "../../services/track.service";

@Component({
  selector: 'app-track-loader',
  templateUrl: './track-loader.component.html',
  styleUrls: ['./track-loader.component.scss']
})
export class TrackLoaderComponent implements OnInit{

  public tracks: Track[] = [];

  constructor(private trackService: TrackService){

  }

  ngOnInit(): void {

    this.tracks =  this.trackService.getTracks();

  }

}
