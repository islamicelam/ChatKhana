import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import {MessagesEntity} from "./entities/message.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class MessagesService {
  constructor(@InjectRepository (MessagesEntity)
              private messagesEntity: Repository<MessagesEntity>
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
    const messageEntity = this.messagesEntity.create(createMessageDto)
    const message = await this.messagesEntity.save(messageEntity)
    console.log(messageEntity)
    console.log(message)
    return message;
  }

  findAll() {
    return this.messagesEntity.find();
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    const message = await this.messagesEntity.findOneBy({id})
    if (!message) {
      throw new Error(`Message with id ${id} not found`)
    }
    message.text = updateMessageDto.text;
    return await this.messagesEntity.save(message)
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
