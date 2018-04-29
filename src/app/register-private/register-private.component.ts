import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms'
import { AuthService } from '../shared/user-service/auth.service';
import { Router } from '@angular/router';
import { Doctor } from '../shared/user-service/Doctor';
import { MapsService } from '../shared/googlemaps.service';

@Component({
  selector: 'app-register-private',
  templateUrl: './register-private.component.html',
  styleUrls: ['./register-private.component.css'],
  providers: [AuthService, MapsService]
})
export class RegisterPrivateComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  chosedLocation: boolean = false;
  addressChosen: string = '';

  rForm: FormGroup;

  user: Doctor;
  password: string;
  emailValidation: string = 'Valid email is required.'
  emailExists: boolean = false;

  constructor(private _authService: AuthService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _gmapsService: MapsService) {
    this.rForm = _formBuilder.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'profession': [null, Validators.required],
      'address': [null, Validators.required],
      'phonenumber': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
      'repassword': [null, Validators.required],
      'validate': [null, Validators.required]
    });
  }

  ngOnInit() {

  }

  matchPassword(control: FormGroup) {
    return control.get('password').value === control.get('repassword').value
      ? null : { 'mismatch': true };
  }

  onFormSubmit(newUser: any) {
    this.user = new Doctor(
      newUser.email,
      newUser.firstname,
      newUser.lastname,
      newUser.profession,
      newUser.phonenumber,
      newUser.address
    );
    this.password = newUser.password;
    this.registerAction(this.user, this.password);
  }

  registerAction(user: Doctor, password: string) {
    this._authService.register(user, password)
      .then(res => {
        if (res) {
          this._router.navigate(['dashboard']);
        } else {
          this.emailExists = true;
          this.emailValidation = 'A user with this email address elready exists.'
        }
      })
      .catch()
  }

  onAddressSearchChange(searchValue: string) {
    var res = this._gmapsService.getGeocoding(searchValue)
      .subscribe(res => {
        this.lat = res.lat();
        this.lng = res.lng();
        this.chosedLocation = true;
      }, err => {

      })
  }

  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    var res = this._gmapsService.getReverseGeocoding(event.coords.lat, event.coords.lng)
      .subscribe(res => {
        console.log(res);
        this.chosedLocation = true;
      }, err => {

      })
  }

}
