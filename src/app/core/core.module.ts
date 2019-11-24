import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsStoreModule } from '../ngxs/ngxs.module';
import { INTERCEPTORS } from './interceptors';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsStoreModule,
    HttpClientModule,
  ],
  providers: [
    INTERCEPTORS,
  ],
})
export class CoreModule { }
