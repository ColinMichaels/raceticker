import {Component, OnDestroy, OnInit} from '@angular/core';
import {CsvService} from "../../services/csv.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit, OnDestroy {
  title = 'raceTicker';
  csvRecords: any;
  header = true;
  keys: any;
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
  feedUrl: string = '';
  timer: any;
  private mockEndpoint = 'https://api.myracepass.com/v3/broadcasts/ticker/demo';

  constructor(private csvService: CsvService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {

    console.warn(this.router);
    switch(this.router.url){
      case '/track':
        break;
      case '/t':
        break;
      case '/ticker':
        this.feedUrl =  this.mockEndpoint;
        break;
      case '/showtime':
        this.feedUrl = '';
    }
   console.warn(this.router.url);
    this.route.queryParamMap.subscribe((data: any) => {
      if(data && !data.params.length){
        this.feedUrl =  this.mockEndpoint;
      }
      if (data && data.params['feed']) {
        this.feedUrl = data.params['feed'];
      }
    });
  }

  ngOnInit(): void {
    this.loadFeed();
    this.timer = setInterval(() => {
      this.loadFeed();
    }, 10000);
  }

  loadFeed() {
    this.csvService.getCsv(this.feedUrl);

    this.csvService.jsonData.subscribe(data => {
      if (data) {
        this.mockData = this.csvService.CSVToJSON(data);
      }
    });

  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }


}
