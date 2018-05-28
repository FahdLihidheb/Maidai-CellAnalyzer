import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { DevEnv } from '../config';
import { Appointment } from './Appointment';
import { promise } from 'protractor';


@Injectable()
export class AppointmentService {

    private _APPOINTMENT_URL: string = DevEnv.SERVER + "maidai-solution/appointments";

    constructor(private _http: HttpClient) {

    }

    getAppointmentByDoctor(): Observable<Appointment[]> {
        return this._http.get<Appointment[]>(this._APPOINTMENT_URL + '/byDoctor',
            {
                headers: {
                    authorization: 'b ' + sessionStorage.getItem('token')
                }
            })
    }

    getAppointmentById(appointmentId: string): Observable<Appointment> {
        return this._http.get<Appointment>(this._APPOINTMENT_URL + '/' + appointmentId)
    }

    addAppointment(appointment: Appointment): Promise<boolean> {
        return this._http.post<boolean>(this._APPOINTMENT_URL,
            {
                patientFile: appointment.patientFile._id,
                visitType: appointment.visitType,
                problem: appointment.problem,
                note: appointment.note,
                dueDate: appointment.dueDate
            },
            {
                headers: {
                    authorization: 'b ' + sessionStorage.getItem('token')
                }
            })
            .toPromise()
            .then(res => {
                return true;
            })
            .catch(err => {
                return false;
            })
    }
}