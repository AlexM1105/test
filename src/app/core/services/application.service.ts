import { Inject, Injectable } from '@angular/core';

import { VALIDATION } from '../constants/validation.const';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    @Inject(VALIDATION) public validation,
  ) {
  }
}
