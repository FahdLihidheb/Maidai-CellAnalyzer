export class Doctor {

    _id: string;
    email: String;
    firstname: string;
    lastname: string;
    profession: string;
    phonenumber: String;
    gender: string;
    imagePath: string;
    privacySettings: {
        isEmail: true,
        isPhonenumber: true
    }
    address: {
        name: '',
        lat: 0.00,
        lng: 0.00
    };

    constructor(email, firstname, lastname, profession, phonenumber, address) {
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.profession = profession;
        this.phonenumber = phonenumber;
        this.address = address;
    }
}