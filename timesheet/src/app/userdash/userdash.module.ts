import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdashRoutingModule } from './userdash-routing.module';
import { UserdashComponent } from './userdash.component';


@NgModule({
  declarations: [
    UserdashComponent
  ],
  imports: [
    CommonModule,
    UserdashRoutingModule
  ]
})
export class UserdashModule { }
