import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // Material modules
    MatButtonModule,
    MatInputModule,
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    // Material modules
    MatButtonModule,
    MatInputModule,
  ],
})
export class AppSharedModule { }
