import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [{ path: '', component: AdmindashComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmindashRoutingModule { }
