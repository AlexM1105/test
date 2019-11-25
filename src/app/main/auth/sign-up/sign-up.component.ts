import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { ApplicationService } from '../../../core/services/application.service';
import { AuthService } from '../../../core/services/auth.service';
import { validationErrors } from '../../../shared/constants/validation-errors.const';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  errors = validationErrors;

  get nameControl(): AbstractControl {
    return this.signUpForm.get('username');
  }

  get passwordControl(): AbstractControl {
    return this.signUpForm.get('password');
  }

  get confirmPasswordControl(): AbstractControl {
    return this.signUpForm.get('confirmPassword');
  }

  constructor(
    private applicationService: ApplicationService,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [
          Validators.required,
          Validators.minLength(this.applicationService.validation.name.minlength),
        ],
      ),
      password: new FormControl('', [
          Validators.required,
          Validators.minLength(this.applicationService.validation.password.minlength),
          Validators.maxLength(this.applicationService.validation.password.maxlength),
          Validators.pattern(this.applicationService.validation.password.pattern),
        ],
      ),
      confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(this.applicationService.validation.password.minlength),
          Validators.maxLength(this.applicationService.validation.password.maxlength),
          Validators.pattern(this.applicationService.validation.password.pattern),
        ],
      ),
    }, this.validateEqualPassword);

  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value);
    }
  }

  validateEqualPassword(control: FormGroup) {
    const pass = control.value.password;
    const conf = control.value.confirmPassword;
    if (pass !== conf) {
      control.get('confirmPassword').setErrors({
        ...control.get('confirmPassword').errors,
        notEqual: true,
      });
    }
    return null;
  }
}
