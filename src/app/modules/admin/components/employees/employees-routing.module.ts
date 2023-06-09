import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';

const routes: Routes = [
  {
    path:'',
    component:ListEmpComponent
  },
  {
    path:'create',
    component:CreateEmpComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
