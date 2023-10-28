import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CsvService {

  parseMockData: any;
  blob: any;
  jsonData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  mockEndpoint = 'https://api.myracepass.com/v3/broadcasts/ticker/demo';
  headers = {
    'Accept': 'text/csv'
  };

  constructor(private http: HttpClient) {
  }

  getCsv(endpoint: string) {
    const url = (endpoint) ? endpoint : this.mockEndpoint;
    return this.http.get(url, {responseType: 'blob', headers: this.headers})
      .subscribe(blob => {
        if (blob.size > 0) {
          this.blob = blob;
          this.loadCsvFromBlob(blob);
        } else {
          console.warn('nothing loaded');
        }
        // saveAs(blob, './mock_data/download.csv',  {autoBom: true});
      });
  }

  async loadCsvFromBlob(blob: Blob) {
    const reader = new FileReader();
    reader.readAsText(blob);
    await new Promise<void>(resolve => reader.onload = () => resolve());
    this.parseMockData = reader.result;
    this.jsonData.next(reader.result);
  }


  CSVToJSON(csv: any) {

    if(typeof  csv === 'string' || csv instanceof String){
      const lines = csv.split('\n');
      const keys: any = lines[0].split(',');
      return lines.slice(1).map(line => {
        return line.split(',').reduce((acc, cur, i) => {
          const toAdd: any = {};
          toAdd[keys[i]] = cur;
          return {...acc, ...toAdd};
        }, {});
      });
    } else {
      return '';
    }


  };

}
