import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../core/api/api.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.get('posts/1')
      .subscribe(data => console.log(data))
  }

}
