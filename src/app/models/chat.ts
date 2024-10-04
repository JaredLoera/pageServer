import { User } from './user';
export interface Chat {
    id:        number;
    uid:       string;
    createdAt: Date;
    updatedAt: Date;
    user_two:      User;
    user_one:      User;
}
