import { Name } from './name';

export class Message {
    from: string;
    heroId: string;
    type: string;
    message: string;

    constructor() {
        this.type = 'message';
    }
}