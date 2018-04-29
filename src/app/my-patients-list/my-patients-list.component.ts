import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/patient-service/patient';
import { patientService } from '../shared/patient-service/patient.service';

@Component({
  selector: 'app-my-patients-list',
  templateUrl: './my-patients-list.component.html',
  styleUrls: ['./my-patients-list.component.css'],
  providers: [patientService]
})
export class MyPatientsListComponent implements OnInit {

  newPatient: Patient;
  patientData: Patient[];

  constructor(private _patientService: patientService) { }

  ngOnInit() {
    this._patientService.getPatients()
      .subscribe(res => {
        this.patientData = res;
      }, err => {
        
      })
  }

}
