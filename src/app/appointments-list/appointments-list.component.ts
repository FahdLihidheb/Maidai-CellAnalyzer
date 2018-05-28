import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment-service/appointment.service';
import { Appointment } from '../shared/appointment-service/Appointment';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css'],
  providers: [AppointmentService]
})
export class AppointmentsListComponent implements OnInit {

  appointments: Array<Appointment>
  todaysAppointments: Array<Appointment>

  constructor(private _appointmentService: AppointmentService) { }

  ngOnInit() {
    this._appointmentService.getAppointmentByDoctor()
      .subscribe(appointments => {
        this.appointments = appointments;
        this.todaysAppointments = this.getTodeysAppointment(this.appointments);
        console.log(this.appointments);
        console.log(this.todaysAppointments);
      })
  }

  getTodeysAppointment(appointment: Array<Appointment>) {
    var today = new Date();
    console.log(today.getMonth() + 1);
    return appointment.filter(item => (item.dueDate.day === today.getDate() && item.dueDate.month === (today.getMonth() + 1))).sort(
      (a, b) => {
        return a.getDueDateTime() > b.getDueDateTime() ? 1 : 0;
      }
    )
  }



}
