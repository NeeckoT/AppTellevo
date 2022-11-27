import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginautoPage } from './loginauto.page';

const routes: Routes = [
  {
    path: '',
    component: LoginautoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginautoPageRoutingModule {}
