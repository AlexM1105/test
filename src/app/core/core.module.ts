import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsStoreModule } from '../ngxs/ngxs.module';
import { INTERCEPTORS } from './interceptors';
import { VALIDATION, VALIDATION_VALUE } from './constants/validation.const';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsStoreModule,
    HttpClientModule,
  ],
  providers: [
    INTERCEPTORS,
  {
    provide: VALIDATION,
    useValue: VALIDATION_VALUE,
  },
  ],
})
export class CoreModule { }
