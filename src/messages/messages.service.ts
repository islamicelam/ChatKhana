import {Injectable} from '@nestjs/common';
import {CreateMessageDto} from './dto/create-message.dto';
import {UpdateMessageDto} from './dto/update-message.dto';
import {Message} from "./entities/messages.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class MessagesService {
  constructor(@InjectRepository (Message)
              private messagesEntity: Repository<Message>
  ) {}
  clientToUser = {};

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;

    return Object.values(this.clientToUser)
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId]
  }

  async create(createMessageDto: CreateMessageDto) {
    const messageEntity = await this.messagesEntity.create(createMessageDto)
    const message = await this.messagesEntity.save(messageEntity)
    console.log(messageEntity)
    console.log(message)
    return message;
  }

  async findAll() {
    return await this.messagesEntity.find();
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    const message = await this.messagesEntity.findOneBy({id})
    if (!message) {
      throw new Error(`Message with id ${id} not found`)
    }
    message.text = updateMessageDto.text;
    return await this.messagesEntity.save(message)
  }

  async remove(id: number) {
    const message = await this.messagesEntity.findOneBy({id})
    console.log(message)
    if (!message) {
      throw new Error(`Message with id ${id} not found`)
    }
    return await this.messagesEntity.remove(message);
  }
}
