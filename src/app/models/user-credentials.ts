export class UserCredentials {
    email: string;
    password: string;

    valid(): boolean {
        return this.email && this.password && this.email.length > 0 && this.password.length > 0;
    }
}
