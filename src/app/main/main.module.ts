import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AppSharedModule } from '../shared/shared.module';
import { HeaderModule } from './components/header/header.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    AppSharedModule,
    MainRoutingModule,
    HeaderModule,
  ],
})
export class MainModule { }
