import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { navigationRoutes } from './core/navigational/enum-navigation/enum-navigation';
import { LoginGuard } from './core/auth/guards/login/login.guard';
// import { AppNavComponent } from './app-nav/app-nav.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: navigationRoutes.login,
    pathMatch: 'full'
  },
  {
    path: navigationRoutes.login,
    loadChildren: './pages/login/login.module#LoginModule',
    canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
