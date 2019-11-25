import { NgModule } from '@angular/core';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { AppSharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    AppSharedModule,
    SignInRoutingModule,
  ]
})
export class SignInModule { }
