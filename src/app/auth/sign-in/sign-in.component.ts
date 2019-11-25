import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { validationErrors } from '../../shared/constants/validation-errors.const';
import { ApplicationService } from '../../core/services/application.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  errors = validationErrors;

  get nameControl(): AbstractControl {
    return this.signInForm.get('username');
  }

  get passwordControl(): AbstractControl {
    return this.signInForm.get('password');
  }

  constructor(
    private applicationService: ApplicationService,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl( '', [
          Validators.required,
          Validators.minLength(this.applicationService.validation.name.minlength),
        ],
      ),
      password: new FormControl( '', [
          Validators.required,
          Validators.minLength(this.applicationService.validation.password.minlength),
          Validators.maxLength(this.applicationService.validation.password.maxlength),
          Validators.pattern(this.applicationService.validation.password.pattern),
        ],
      ),
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.authService.signIn(this.signInForm.value);
    }
  }
}
