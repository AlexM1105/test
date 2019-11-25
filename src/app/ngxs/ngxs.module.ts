import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { environment } from '../../environments/environment';
import { AuthState } from './auth';
import { SignInRequestState } from './requests/auth/sign-in/sign-in-request.state';
import { SignUpRequestState } from './requests/auth/sign-up/sign-up-request.state';
import { RequestsState } from './requests/requests.state';


@NgModule({
  imports: [
    NgxsModule.forRoot(
      [
        AuthState,
        // requests
        RequestsState,
        SignInRequestState,
        SignUpRequestState,
      ]
    ),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
})
export class NgxsStoreModule { }
