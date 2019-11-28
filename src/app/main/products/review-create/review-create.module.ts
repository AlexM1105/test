import { NgModule } from '@angular/core';

import { ReviewCreateComponent } from './review-create.component';
import { AppSharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    ReviewCreateComponent,
  ],
  imports: [
    AppSharedModule,
  ],
  exports: [
    ReviewCreateComponent,
  ]
})
export class ReviewCreateModule { }
