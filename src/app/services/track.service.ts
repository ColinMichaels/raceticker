import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {AngularFirestore} from "@angular/fire/compat/firestore";

export class Track{
  name: string = '';
  value: string = '' ;
  location?: any = '';
}

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  item$: Observable<any[]> = new Observable<any[]>();


  private tracks: Track[] = [
    {name: 'Showtime', value: 'showtime', location: null},
    {name: 'Auburndale', value: 'auburndale', location: null},
    {name: 'Orlando Speed World', value: 'orlando', location: null},
    {name: 'East Bay', value: 'eastbay', location: null},
    {name: 'Bradenton Motorsports Park', value: 'bradenton', location: null},
  ];

  selectedTrack: Track = new Track();
  data: any;


  constructor(private http: HttpClient, private store: AngularFirestore) {

    const todo = this.store.collection('todo').valueChanges({ idField: 'id' }) as Observable<any[]>;
    const inProgress = this.store.collection('inProgress').valueChanges({ idField: 'id' }) as Observable<any[]>;
    const done = this.store.collection('done').valueChanges({ idField: 'id' }) as Observable<any[]>;
    console.warn(todo, inProgress, done);

    this.getData();

  }

  getData() {
     this.item$.subscribe(thing => {
      this.data = thing;
      console.warn(this.data);
    });
  }


  getTracks(){
    return this.tracks;
  }
}
