export class UserInfo {
    _id: string;
    name: Name;
    email: string;

    constructor() {
        this.name = new Name();
    }

    valid() {
        return true; // implement validation
    }
}

class Name {
    firstName: string; 
    lastName: string;
}