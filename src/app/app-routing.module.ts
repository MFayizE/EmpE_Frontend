import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignGuard } from './core/guards/assign.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { IsAdminGuard } from './core/guards/is-admin.guard';
import { IsUserGuard } from './core/guards/is-user.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "auth",
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    canActivate: [AssignGuard],
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./modules/admin/layout/layout.module").then(
        (m) => m.LayoutModule
      ),
    canActivate: [AuthGuard,IsAdminGuard],

  },
  {
    path: "user",
    loadChildren: () =>
      import("./modules/users/user-layout/user-layout.module").then(
        (m) => m.UserLayoutModule
      ),
    canActivate: [AuthGuard,IsUserGuard],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
