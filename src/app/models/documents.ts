export interface Document {
    id:          number;
    name:        string;
    uniqueName:  string;
    description: string;
    file:        string;
    userId:      number;
    isPublic:    boolean;
    createdAt:   Date;
    updatedAt:   Date;
}
