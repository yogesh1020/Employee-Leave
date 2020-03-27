import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveListComponent } from './leave-list/leave-list.component';


const routes: Routes = [
  {
    path:'leaveList' , component:LeaveListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
