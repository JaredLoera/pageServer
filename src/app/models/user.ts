export interface User {
    id?:          number;
    fullName?:    string;
    nickname?:    string;
    email?:       string;
    password?:    string;
    description?: string;
    linkavatar?:  string;
    linkedin?:    string;
    github?:      string;
    showProfile?: boolean;
    createdAt?:   Date;
    updatedAt?:   Date;
    rolId?:       number;
}
