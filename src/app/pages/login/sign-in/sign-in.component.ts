import { Component, OnInit } from '@angular/core';
import { Observable, from, pipe, interval, fromEvent, range, timer } from 'rxjs';

import { map, filter, scan, take, takeLast, takeWhile, takeUntil } from 'rxjs/operators';

import { ApiService } from '../../../core/api/api.service';
import { AuthApiService } from '../../../core/auth/auth-api/auth-api.service';
import { LoginService } from '../login-service/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  data;
  timer;
  timer1;
  res;
  clicks;
  constructor(
    private apiService: ApiService,
    private authApiService: AuthApiService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.authApiService.init('posts/1')
      .subscribe(data => console.log(data))
    this.loginService.init();

    // this.formArray([1, 2, 3, 4, 5, 6, 7, 8])
    // this.timer = interval(1000).pipe(takeWhile(ev => +ev < 4));
    // this.data.subscribe(data => console.log(data))
    // this.timer.subscribe(data => console.log(data))
    // this.res = this.timer.pipe(takeWhile(ev => ev > 4))
    // this.timer.subscribe( dat => console.log(dat))
    // this.clicks = fromEvent(document.getElementById('cli'), 'click');
    // this.timer1 = interval(1000).pipe(takeUntil(this.clicks));

    //  this.timer1.subscribe(x => console.log(x));
    // this.clicks.subscribe(x => console.log(x));

    // range()
    // const numbers = range(1,100)

    // timer
    // const numbers = timer(3000, 3000);
    // numbers.subscribe(x => console.log(x));
  }

  send() {
  }
  formArray(data) {
    this.data = from(data)
      .pipe(
        // filter(a => a > 4)
        // take(2)
        takeLast(3)
      )
  }
}
