import { Doctor } from "./user-service/Doctor";

export class Session {
    private static instance: Session;
    private _user: Doctor;

    private constructor(user: Doctor) {
        this._user = user;
    }

    public static getInstance(user: Doctor) {
        if (!Session.instance) {
            Session.instance = new Session(user);
        }
        return Session.instance;
    }

    public getCurrent(): Doctor {
        return this._user;
    }
}