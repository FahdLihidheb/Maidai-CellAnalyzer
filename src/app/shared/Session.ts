import { IUser } from "./user-service/IUser";

export class Session{
    //should be using singleton
    static _user : IUser;
}