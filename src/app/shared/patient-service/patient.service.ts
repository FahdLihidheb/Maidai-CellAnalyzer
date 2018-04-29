import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { DevEnv } from '../config';
import { Patient } from './Patient';
import { promise } from 'protractor';


@Injectable()
export class patientService {

    private _PATIENT_URL: string = DevEnv.SERVER + "maidai-solution/patients";

    constructor(private _http: HttpClient) {

    }

    getPatients(): Observable<Patient[]> {
        return this._http.get<Patient[]>(this._PATIENT_URL)
    }

    getPatientById(patientId: string): Observable<Patient[]> {
        return this._http.get<Patient[]>(this._PATIENT_URL + '/' + patientId)
    }

    addPatient(patient: Patient): Promise<boolean> {
        return this._http.post<boolean>(this._PATIENT_URL, {
            patient: patient
        }, {
                headers: {
                    authorization: 'b ' + localStorage.getItem('token')
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