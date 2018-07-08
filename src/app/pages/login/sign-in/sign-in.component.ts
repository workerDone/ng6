import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../core/api/api.service';
import { AuthApiService } from '../../../core/auth/auth-api/auth-api.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private authApiService: AuthApiService,
  ) { }

  ngOnInit() {
    this.authApiService.init('posts/1')
      .subscribe(data => console.log(data))
  }

}
