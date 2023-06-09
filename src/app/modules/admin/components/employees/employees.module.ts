import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPerformanceComponent } from './add-performance/add-performance.component';


@NgModule({
  declarations: [
    ListEmpComponent,
    CreateEmpComponent,
    EditEmpComponent,
    AddPerformanceComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
