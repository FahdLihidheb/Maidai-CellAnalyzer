import { Component, OnInit } from '@angular/core';
import { PatientFile } from '../shared/patient-file-service/PatientFile';
import { AppointmentService } from '../shared/appointment-service/appointment.service';
import { PatientFileService } from '../shared/patient-file-service/patientFile.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms'
import { Appointment } from '../shared/appointment-service/Appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css'],
  providers: [PatientFileService, AppointmentService]
})
export class NewAppointmentComponent implements OnInit {

  patientForm: FormGroup;
  appointmentForm: FormGroup;
  patientFile: PatientFile;
  appointment: Appointment;
  patientFiles: Array<PatientFile>;
  patientFileExists: boolean = false;

  constructor(private _patientFileService: PatientFileService,
    private _appointmentService: AppointmentService,
    private _formBuilder: FormBuilder,
    private _router: Router) {

    this.patientForm = _formBuilder.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'birthdate': [null, Validators.required],
      'phonenumber': [null, Validators.required],
      'note': [null, Validators.required],
      'gender': [null, Validators.required]
    });

    this.appointmentForm = _formBuilder.group({
      'problem': [null, Validators.required],
      'visittype': [null, Validators.required],
      'dueDate': [null, Validators.required],
      'dueTime': [null, Validators.required],
      'note': [null, Validators.required]
    });

  }

  ngOnInit() {
    this._patientFileService.getPatientsByDoctor()
      .subscribe(patientFiles => {
        this.patientFiles = patientFiles;
        console.log(this.patientFiles);
      })
  }

  onAppointmentFormSubmit(appointment: any) {
    this.appointment = new Appointment(
      this.patientFile,
      appointment.visittype,
      appointment.problem,
      appointment.note,
      {
        day: appointment.dueDate.day,
        month: appointment.dueDate.month,
        year: appointment.dueDate.year,
        time: appointment.dueTime
      }
    );
    this.addNewAppointment(this.appointment);
    console.log(this.appointment)
  }

  addNewAppointment(appointment: Appointment) {
    this._appointmentService.addAppointment(this.appointment)
      .then(res => {
        if (res) {
          this._router.navigate(['appoinments']);
        } else {

        }
      })
  }

  onPatientFormSubmit(newPFile: any) {
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
          this.patientFileExists = true;
        } else {

        }
      })
      .catch()
  }

  SelectPatientFile(patientFile: PatientFile) {
    this.patientFile = patientFile;
    this.patientFileExists = true;
  }

}
