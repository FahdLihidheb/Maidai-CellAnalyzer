import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/user-service/auth.service';
import { Router } from '@angular/router';
import { Session } from '../shared/Session';
import { Doctor } from '../shared/user-service/Doctor';

@Component({
  selector: 'app-register-private',
  templateUrl: './register-private.component.html',
  styleUrls: ['./register-private.component.css'],
  providers: [AuthService]
})
export class RegisterPrivateComponent implements OnInit {

  user: Doctor

  firstname: string;
  lastname: string;
  email: string;
  profession: string;
  phonenumber: string;
  address: string;
  password: string;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {

  }

  registerAction() {
    this.user = new Doctor(this.email, this.firstname, this.lastname, this.profession, this.phonenumber, this.address);
    console.log(this.user);
    this._authService.register(this.user, this.password)
      .then(res => {
        if (res) {
          this._router.navigate(['dashboard']);
        } else {
          window.alert('Email already exists.')
        }
      })
      .catch()
  }

}
