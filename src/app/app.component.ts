import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response$;
  constructor(private http: HttpClient) {
    this.response$ = this.http.get('/api/invoice/preview/344d440cd216774dbb0abfd2feaf243f')
  }
  title = 'ng-cors';
}
