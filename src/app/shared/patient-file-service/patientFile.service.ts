import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { DevEnv } from '../config';
import { PatientFile } from './PatientFile';
import { promise } from 'protractor';


@Injectable()
export class PatientFileService {

    private _PATIENT_URL: string = DevEnv.SERVER + "maidai-solution/patientFiles";

    constructor(private _http: HttpClient) {

    }

    getPatientsByDoctor(): Observable<PatientFile[]> {
        return this._http.get<PatientFile[]>(this._PATIENT_URL + '/byDoctor',
            {
                headers: {
                    authorization: 'b ' + sessionStorage.getItem('token')
                }
            })
    }

    getPatientById(patientFileId: string): Observable<PatientFile> {
        return this._http.get<PatientFile>(this._PATIENT_URL + '/' + patientFileId)
    }

    addPatient(patientFile: PatientFile): Promise<boolean> {
        return this._http.post<boolean>(this._PATIENT_URL,
            {
                patient: patientFile.patient,
                note: patientFile.note
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