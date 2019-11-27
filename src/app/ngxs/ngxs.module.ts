import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { environment } from '../../environments/environment';
import { AuthState } from './auth';
import { ProductState } from './product/product.state';
import { RequestsState } from './requests/requests.state';
import { SignInRequestState } from './requests/auth/sign-in/sign-in-request.state';
import { SignUpRequestState } from './requests/auth/sign-up/sign-up-request.state';
import { ProductsGetRequestState } from './requests/product/products-get/products-get-request.state';
import { ReviewsGetRequestState } from './requests/review/reviews-get/reviews-get-request.state';
import { ReviewPostRequestState } from './requests/review/review-post/review-post-request.state';
import { ReviewState } from './review';


@NgModule({
  imports: [
    NgxsModule.forRoot(
      [
        AuthState,
        ProductState,
        ReviewState,
        // requests
        RequestsState,
        SignInRequestState,
        SignUpRequestState,
        ProductsGetRequestState,
        ReviewsGetRequestState,
        ReviewPostRequestState,
      ]
    ),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
})
export class NgxsStoreModule { }
