export interface Message {
    id:        number;
    chatId:    number;
    userId:    number;
    message:   string;
    createdAt: Date;
    updatedAt: Date;
}
