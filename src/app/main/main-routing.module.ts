import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { ProductResolver } from '../core/resolvers/product.resolver';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      },
    ],
    resolve: [
      ProductResolver,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
