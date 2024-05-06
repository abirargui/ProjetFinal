import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmindashRoutingModule } from './admindash-routing.module';
import { AdmindashComponent } from './admindash.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    AdmindashComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    AdmindashRoutingModule
  ]
})
export class AdmindashModule { }
