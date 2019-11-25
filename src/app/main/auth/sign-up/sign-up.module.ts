import { NgModule } from '@angular/core';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { AppSharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    AppSharedModule,
    SignUpRoutingModule,
  ]
})
export class SignUpModule { }
