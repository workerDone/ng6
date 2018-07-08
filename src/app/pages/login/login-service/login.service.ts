import { Injectable } from '@angular/core';
import { action, computed, observable } from 'mobx-angular';

@Injectable()
export class LoginService {

  constructor() { }

  @action init() {
    console.log('hello');
  }
}
