import { Component, OnInit } from '@angular/core';
import { PatientFileService } from '../shared/patient-file-service/patientFile.service';
import { PatientFile } from '../shared/patient-file-service/PatientFile';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../shared/appointment-service/Appointment';

@Component({
  selector: 'app-patient-file-details',
  templateUrl: './patient-file-details.component.html',
  styleUrls: ['./patient-file-details.component.css'],
  providers: [PatientFileService]
})
export class PatientFileDetailsComponent implements OnInit {

  patientFile: PatientFile;

  constructor(private _patientFileService: PatientFileService,
    private _router: ActivatedRoute) {
  }

  ngOnInit() {
    this._router.params.subscribe(params =>
      this._patientFileService.getPatientById(params['patientFileId'])
        .subscribe(patientFile => {
          this.patientFile = patientFile;
          console.log(this.patientFile)
        })
    )
  }

}
