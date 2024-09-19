import { User } from './user';
export interface Chat {
    id:        number;
    uid:       string;
    createdAt: Date;
    updatedAt: Date;
    users:     User[];
}
