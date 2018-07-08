import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { navigationRoutes } from './core/navigational/enum-navigation/enum-navigation';

const routes: Routes = [
  {
    path: '',
    redirectTo: navigationRoutes.login,
    pathMatch: 'full'
  },
  {
    path: navigationRoutes.login,
    loadChildren: './pages/login/login.module#LoginModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
