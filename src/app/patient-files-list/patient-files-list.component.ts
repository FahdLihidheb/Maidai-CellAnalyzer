import { Component, OnInit } from '@angular/core';
import { PatientFileService } from '../shared/patient-file-service/patientFile.service';
import { PatientFile } from '../shared/patient-file-service/PatientFile';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-files-list',
  templateUrl: './patient-files-list.component.html',
  styleUrls: ['./patient-files-list.component.css'],
  providers: [PatientFileService]
})
export class PatientFilesListComponent implements OnInit {

  patientFiles: Array<PatientFile>;
  rForm: FormGroup;
  patientFile: PatientFile;

  constructor(private _patientFileService: PatientFileService,
    private _router: Router,
    private _formBuilder: FormBuilder) {

    this.rForm = _formBuilder.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'birthdate': [null, Validators.required],
      'phonenumber': [null, Validators.required],
      'note': [null, Validators.required],
      'gender': [null, Validators.required]
    });

  }

  ngOnInit() {
    this._patientFileService.getPatientsByDoctor()
      .subscribe(patientFiles => {
        this.patientFiles = patientFiles;
        console.log(this.patientFiles);
      })
  }


  onFormSubmit(newPFile: any) {
    this.patientFile = new PatientFile(
      {
        firstname: newPFile.firstname,
        lastname: newPFile.lastname,
        birthdate: newPFile.birthdate.day + '/' + newPFile.birthdate.month + '/' + newPFile.birthdate.year,
        email: newPFile.email,
        phonenumber: newPFile.phonenumber,
        gender: newPFile.gender
      },
      newPFile.note
    )
    this.addNewPatientFile(this.patientFile);
  }

  addNewPatientFile(patientFile: PatientFile) {
    this._patientFileService.addPatient(patientFile)
      .then(res => {
        if (res) {

        } else {

        }
      })
      .catch()
  }

}
