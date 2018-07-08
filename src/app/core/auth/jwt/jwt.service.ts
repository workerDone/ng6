import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  @observable token: string;

  constructor() { }

  @action init() {
    this.token = this.getToken;
  }

  @action saveToken(token: string) {
    this.token = token;

    window.localStorage['jwtToken'] = token;
  }

  @action destroyToken() {
    this.token = null;

    window.localStorage.removeItem('jwtToken');
  }

  get getToken(): string {
    return window.localStorage['jwtToken'];
  }
}
