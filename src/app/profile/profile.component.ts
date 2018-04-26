import { Component, OnInit } from '@angular/core';
import { Session } from '../shared/Session';
import { Doctor } from '../shared/user-service/Doctor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile : Doctor;

  constructor() { }

  ngOnInit() {
    this.profile = Session.getInstance(null).getCurrent();
  }

}
