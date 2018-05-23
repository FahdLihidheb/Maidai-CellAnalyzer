import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';
import { AuthService } from '../shared/user-service/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  wrong: Boolean = false;

  constructor(private _authService: AuthService, private _router: Router, private _formBuilder: FormBuilder) {
    this.rForm = _formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.required],
      'rememberMe': ''
    });
  }
  ngOnInit() {
  }

  onFormSubmit(user: any) {
    this._authService.login(user.email, user.password, user.rememberMe)
      .then(
        res => {
          if (res) {
            this._router.navigate(['dashboard']);
          }
          else {
            this.rForm.get('password').reset();
            this.wrong = true;
          }
        })
      .catch(err => {

      })
  }

}
