// isolated modules being consumed by app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component'; // root module that bootstraps app
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';

// for our service
import { CribsService } from './services/cribs.service';

// es6 decorators take a configuration object & sit on top of classes
@NgModule({

  // takes inventory of components being used
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent
  ],

  // makes use of imported modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  // calls injectable services
  providers: [CribsService],

  // root module that bootstraps app
  bootstrap: [AppComponent]
})

//es6 class
export class AppModule { }
