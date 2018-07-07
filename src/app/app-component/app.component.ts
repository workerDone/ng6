import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { ApiService } from '../core/api/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  constructor(
    private apiService: ApiService,
  ) {}
  ngOnInit() {
    this.apiService.get('posts')
      .subscribe(data => console.log(data))
    console.log(environment.url)
  }
  // https://jsonplaceholder.typicode.com/
}
