import { Component } from '@angular/core';
import {TestService} from './test.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private svc: TestService, private http: HttpClient) {
    this.svc.printToConsole('Got the Service!');
  }

  ngOnInit() {
    const obs = this.http.get('https://api.github.com/users/RutvaRajdev');
    obs.subscribe((response) => console.log(response));
  }
}
