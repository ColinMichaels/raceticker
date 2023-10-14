import {Component, OnDestroy, OnInit} from '@angular/core';
import {CsvService} from "../services/csv.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit, OnDestroy{
  title = 'raceTicker';
  csvRecords:any;
  header = true;
  keys:any;
  mockData: any;
  file: any;

  arrElements = [
    "Position",
    "FullName",
    "Laps",
    "LastLapTime"
  ];

  logoURL = '/assets/st_temp_logo.jpg';
  flagSVG = '/assets/icons/sports_score_FILL0_wght400_GRAD0_opsz24.svg';
  feedUrl: string  = '';
  timer: any;

  constructor( private csvService: CsvService, private http: HttpClient, private route: ActivatedRoute){
    this.route.queryParamMap.subscribe((data:any) => {
      if(data && data.params['feed']){
        this.feedUrl = data.params['feed'];
      }
    });
  }

  ngOnInit(): void {

    this.loadFeed();
    this.timer = setInterval(()=>{
            this.loadFeed();
    },10000);


  }

  loadFeed(){
    this.csvService.getCsv(this.feedUrl);

    this.csvService.jsonData.subscribe(data => {
      if(data) {
        this.mockData = this.csvService.CSVToJSON(data);
      }
    });

  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }


}
