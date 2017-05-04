import { UserInfo } from './user-info';

export class AuthenticatedUser {
    token: string;
    userInfo: UserInfo;

    constructor() {
        this.userInfo = new UserInfo();
    }
}