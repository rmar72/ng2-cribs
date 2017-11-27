import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from  './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})

 // this init fn is a lifecycle, for kicking off this component
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(
     private http: Http,
     private cribsService: CribsService
    ) { }

  // makes an http request when this component is initiallized ( like a doc.ready )
  ngOnInit() {
    
    // http call before we moved it to a service
    // this.http.get('data/cribs.json')
    // .map(res => res.json())
    // .subscribe(
    //   data => this.cribs = data,
    //   error => this.error = error.statusText
    // );

    this.cribsService.getAllCribs()
    .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );


  }

}
