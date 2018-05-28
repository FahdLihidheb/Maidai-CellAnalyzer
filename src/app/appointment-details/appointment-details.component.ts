import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../shared/appointment-service/Appointment';
import { AppointmentService } from '../shared/appointment-service/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css'],
  providers: [AppointmentService]
})
export class AppointmentDetailsComponent implements OnInit {

  appointment: Appointment;

  constructor(private _appointmentService: AppointmentService,
    private _router: ActivatedRoute) { }

  ngOnInit() {
    this._router.params.subscribe(params =>
      this._appointmentService.getAppointmentById(params['appointmentId'])
        .subscribe(appointment => {
          this.appointment = appointment;
          console.log(this.appointment)
        })
    )
  }

}
