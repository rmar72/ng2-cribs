import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CribsService } from './../services/cribs.service'; // need this class
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  constructor(
      public cribsService: CribsService, // need this class to use it in a method down below
      private utilService: UtilService
    ) { }

  ngOnInit() {
   
  }

  // calls the AddCrib method from crib service
  onCribSubmit(data): void {
    this.cribsService.addCrib(data);

    //clears the form by using the ViewChild
    this.newCribForm.reset();
  }

}
