import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'Boroughbrodge & District Angling Club';

  lat = 54.091339;
  long = -1.355844;
}
