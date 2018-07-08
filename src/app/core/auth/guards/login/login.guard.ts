import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { NavigationService } from '../../../navigational/navigation/navigation.service';
import { AuthApiService } from '../../auth-api/auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private navigationService: NavigationService,
    private authApiService: AuthApiService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authApiService.isAuthenticated) {
      return false;
    }
    return true;
  }
}
