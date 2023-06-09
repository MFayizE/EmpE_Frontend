import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserLayoutComponent } from './user-layout.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserLayoutComponent,
    UserHeaderComponent,
    UserSidebarComponent
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    SharedModule
  ]
})
export class UserLayoutModule { }
