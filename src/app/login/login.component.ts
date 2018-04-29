import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';
import { AuthService } from '../shared/user-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private _authService: AuthService, private _router: Router) {

  }
  ngOnInit() {
  }

  loginAction() {
    this._authService.login(this.email, this.password)
      .then(
        res => {
          if(res) this._router.navigate(['dashboard']);
          else this.password = '';
        })
      .catch(err => {
        this.password = '';
      })
  }

}
