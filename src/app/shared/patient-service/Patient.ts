export class Patient {
    _id : string;
    firstname: string;
    lastname: string;
    birthdate: string;
    email: string;
    phonenumber: string;

    constructor(firstname, lastname, birthdate){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }
}