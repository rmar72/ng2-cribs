import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Subject } from 'rxjs/Subject';
// this is an Observer and Observable, meaning its a way to setup behavior that is like an observable
// but we can also subscribe to it as an observer
import 'rxjs/add/operator/map';

// decorator meaning we can inject it as a dependency
@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();
  constructor( private http: Http) { }

  // this will be where we hold our data coming from the http request
  getAllCribs(){
    return this.http.get('data/cribs.json').map(res => res.json())
  }

  addCrib(data){
    // changes the img prop 
    data.image = 'default-crib';
    // this is a promise
    this.newCribSubject.next(data);
  }
}
