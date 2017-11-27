import { Component, OnInit, Input } from '@angular/core';
                        // we specify we are getting input from the other end
                        // the html property binding

import {Crib } from './../crib'; //importing crib interface                

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input('crib') crib: Crib; // using interface

  constructor() { }

  ngOnInit() {
  }

}
