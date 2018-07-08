import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';

import { LoginRoutingModule } from './login-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';

import { LoginService } from './login-service/login.service';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MobxAngularModule,
  ],
  providers: [
    LoginService
  ],
  declarations: [
    SignInComponent,
  ]
})
export class LoginModule { }
