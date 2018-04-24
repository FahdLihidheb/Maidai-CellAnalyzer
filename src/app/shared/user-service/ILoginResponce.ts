import { IUser } from './IUser';

export interface ILoginResponce {
    message: string;
    user: IUser;
    token: string;
}