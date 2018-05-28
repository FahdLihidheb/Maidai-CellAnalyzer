import { Component, OnInit } from '@angular/core';
import { PatientFileService } from '../shared/patient-file-service/patientFile.service';
import { PatientFile } from '../shared/patient-file-service/PatientFile';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../shared/appointment-service/Appointment';
import { AppointmentService } from '../shared/appointment-service/appointment.service';

@Component({
  selector: 'app-patient-file-details',
  templateUrl: './patient-file-details.component.html',
  styleUrls: ['./patient-file-details.component.css'],
  providers: [PatientFileService, AppointmentService]
})
export class PatientFileDetailsComponent implements OnInit {

  patientFile: PatientFile;
  appointments: Array<Appointment>

  constructor(private _patientFileService: PatientFileService,
    private _appointmentService: AppointmentService,
    private _router: ActivatedRoute) {
  }

  ngOnInit() {
    this._router.params.subscribe(params => {
      this._patientFileService.getPatientById(params['patientFileId'])
      .subscribe(patientFile => {
        this.patientFile = patientFile;
        console.log(this.patientFile)
      });
      this._appointmentService.getAppointmentByDoctor()
        .subscribe(appointments => {
          this.appointments = appointments.filter(appointment => appointment.patientFile._id == params['patientFileId']);
        });
    }
    )
  }

}
