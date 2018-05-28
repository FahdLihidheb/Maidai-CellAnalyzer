import { AnalyzeFile } from '../cell-analyzer-service/AnalyzeFile';
import { Appointment } from '../appointment-service/Appointment';


export class PatientFile {
    _id: string;
    patient: {
        firstname: string;
        lastname: string;
        birthdate: string;
        email: string;
        phonenumber: string;
        gender: string;
    }
    note: string;
    appointments: Array<Appointment>;
    analyzeFiles: Array<AnalyzeFile>;
    createdOn: Date;

    constructor(patient, note) {
        this.patient = patient;
        this.note = note;
    }

}