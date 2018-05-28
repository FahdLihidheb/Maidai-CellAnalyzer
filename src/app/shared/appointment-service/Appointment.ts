import { PatientFile } from "../patient-file-service/PatientFile";

export class Appointment {
    _id: string;
    patientFile: PatientFile;
    visitType: string;
    problem: string;
    note: string;
    dueDate: {
        day: number,
        month: number,
        year: number,
        time: string
    }
    createdOn: Date;

    constructor(patientFile, visitType, problem, note, dueDate) {
        this.patientFile = patientFile;
        this.visitType = visitType;
        this.problem = problem;
        this.note = note;
        this.dueDate = dueDate;
    }

    getDueDateTime(): Date {
        return new Date(this.dueDate.day,
            this.dueDate.month,
            this.dueDate.year,
            Number(this.dueDate.time.substring(0, 3)),
            Number(this.dueDate.time.substring(3, 6)))
    }

}