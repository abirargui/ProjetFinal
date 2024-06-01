import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgChartsModule } from 'ng2-charts';

import { AdmindashRoutingModule } from './admindash-routing.module';
import { AdmindashComponent } from './admindash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TimetableComponent } from './pages/timetable/timetable.component';


@NgModule({
  declarations: [
    AdmindashComponent,
    DashboardComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,
    SidenavComponent,
    ProfileComponent,
    TimetableComponent,
    
   
  ],
  imports: [
    CommonModule,
    AdmindashRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    NgChartsModule
  ]
})
export class AdmindashModule { }
