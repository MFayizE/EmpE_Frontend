import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dash",
  },
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path:'dash',
        loadChildren: () =>
        import("../components/dashboard/dashboard.module").then(
          (m) => m.DashboardModule
        ),
      },
      {
        path: "emp",
        loadChildren: () =>
          import("../components/employees/employees.module").then(
            (m) => m.EmployeesModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
