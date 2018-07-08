import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private apiService: ApiService,
  ) { }

  init(string) {
    return this.apiService.get(string)
      .pipe(
        tap(() => this.apiService.get('posts/2')),
        tap((a) => {
          this.saveToLocal(a);
        } )
      );
  }

  saveToLocal(user) {
    localStorage.user = JSON.stringify(user);
  }
}
