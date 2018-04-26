export class Doctor {

    _id: string;
    email: string;
    firstname: string;
    lastname: string;
    profession: string;
    phonenumber: string;
    address: string;

    constructor(email, firstname, lastname, profession, phonenumber, address) {
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.profession = profession;
        this.phonenumber = phonenumber;
        this.address = address;
    }
}