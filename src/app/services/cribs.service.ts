import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

// decorator meaning we can inject it as a dependency
@Injectable()
export class CribsService {
  constructor( private http: Http) { }

  // this will be where we hold our data coming from the http request
  getAllCribs(){
    return this.http.get('data/cribs.json').map(res => res.json())
  }
}
