import {Message} from "../entities/messages.entity";

export class CreateMessageDto extends Message {
    roomId: string;
}
