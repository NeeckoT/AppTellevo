import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginautoPageRoutingModule } from './loginauto-routing.module';

import { LoginautoPage } from './loginauto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginautoPageRoutingModule
  ],
  declarations: [LoginautoPage]
})
export class LoginautoPageModule {}
