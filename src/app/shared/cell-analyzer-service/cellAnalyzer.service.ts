import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { DevEnv } from '../config';
import { promise } from 'protractor';
import { AnalyzeFile } from './AnalyzeFile';

@Injectable()
export class CellAnalyzeService {

    private _AnlyseFile_URL: string = DevEnv.SERVER + "maidai-solution/analyseFiles/addAnalyseFile";

    constructor(private _http: HttpClient) {

    }



    getAnalyseFileById(cellAnlyseId: string): Observable<AnalyzeFile> {
        return this._http.get<AnalyzeFile>(this._AnlyseFile_URL + '/' + cellAnlyseId)
    }

    addAnalyseFile(analyseFile: AnalyzeFile): Promise<boolean> {
        return this._http.post<boolean>(this._AnlyseFile_URL,
            {
                codename: analyseFile.codename,
                sampleCellImage: analyseFile.sampleCellImage,
                diagnosis: analyseFile.diagnosis,
                note: analyseFile.note
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
