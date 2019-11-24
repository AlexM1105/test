import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AppSharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    AppSharedModule,
    MainRoutingModule,
  ],
})
export class MainModule { }
