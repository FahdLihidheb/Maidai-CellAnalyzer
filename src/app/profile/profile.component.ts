import { Component, OnInit } from '@angular/core';
import { Session } from '../shared/Session';
import { AuthService } from '../shared/user-service/auth.service';
import { Doctor } from '../shared/user-service/Doctor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {

  profile: Doctor;
  result: any;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.getCurrentSession()
      .subscribe(doctor => {
        this.profile = doctor;
      })
  }

}
