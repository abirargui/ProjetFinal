import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash.component';



const routes: Routes = [{ path: 'admindash', component: AdmindashComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmindashRoutingModule { }
