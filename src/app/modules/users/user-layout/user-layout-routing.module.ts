import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dash",
  },
  {
    path:'',
    component:UserLayoutComponent,
    children: [
      {
        path:'dash',
        loadChildren: () =>
        import("../components/user-dashboard/user-dashboard.module").then(
          (m) => m.UserDashboardModule
        ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
