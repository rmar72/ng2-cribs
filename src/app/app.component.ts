import { Component } from '@angular/core';

// app config-type decorator
@Component({
  selector: 'app-root', // name of selector that will be used in the view
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// defining the component here, allows us to use it
export class AppComponent {
  title = 'app';
}
