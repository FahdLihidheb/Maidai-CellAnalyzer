import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';
import { UserService } from '../shared/user-service/user.service';
import { Session } from '../shared/Session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private _userService: UserService, private _router: Router) {

  }
  ngOnInit() {
  }

  loginAction() {
    this._userService.login(this.email, this.password)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          Session._user = res.user;
          this._router.navigate(['dashboard']);
        },
        err => {
          this.password = '';
        }
      )
  }

}
