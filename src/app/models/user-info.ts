import { Name } from './name';

export class UserInfo {
    _id: string;
    name: Name;
    email: string;
    password: string;

    constructor() {
        this.name = new Name();
    }

    valid() {
        return true; // implement validation
    }
}