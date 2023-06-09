import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedRoutingModule } from './shared-routing.module';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    DialogConfirmComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    DialogConfirmComponent,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class SharedModule { }
