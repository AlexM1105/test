import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { AppSharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    AppSharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
