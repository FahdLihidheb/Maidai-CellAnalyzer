import { Doctor } from '../user-service/Doctor';
export class AnalyzeFile {
   
    _id: string;
    codename: string;
    note: string;
    createdOn: Date;
    diagnosis: {
        exTime: Float32Array,
        benign: Float32Array,
        malignant: Float32Array
    }
    createdBy: Doctor;
    sampleCellImage: string;

    constructor(codename, note, diagnosis,sampleCellImage) {
        this.codename = codename;
        this.note = note;
        this.diagnosis = diagnosis;     
        this.sampleCellImage = sampleCellImage;
    }
}