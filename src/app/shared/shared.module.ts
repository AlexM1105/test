import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
} from '@angular/material';
import { ImageFullSrcPipe } from './pipes/image-full-src/image-full-src.pipe';


@NgModule({
  declarations: [
    ImageFullSrcPipe,
  ],
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
    ImageFullSrcPipe,
  ],
  providers: [
    ImageFullSrcPipe,
  ],
})
export class AppSharedModule { }
