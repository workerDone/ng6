import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../core/api/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isHandset$: Observable<boolean>;

  constructor(
    private apiService: ApiService,
    private breakpointObserver: BreakpointObserver,
  ) {}
  ngOnInit() {

  this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

    this.apiService.get('posts')
      .subscribe(data => console.log(data))
    console.log(environment.url)
  }
}
