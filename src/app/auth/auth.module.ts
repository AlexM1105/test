import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AppSharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    AppSharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
