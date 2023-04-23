import {Injectable} from '@nestjs/common';
import {CreateMessageDto} from './dto/create-message.dto';
import {UpdateMessageDto} from './dto/update-message.dto';
import {Message} from "./entities/messages.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Room} from "../rooms/rooms.entity";
import {User} from "../users/users.entity";
import {Socket} from "socket.io";

@Injectable()
export class MessagesService {
  constructor(@InjectRepository (Message) private messagesEntity: Repository<Message>,
              @InjectRepository (Room) private roomsEntity: Repository<Room>,
              @InjectRepository (User) private usersEntity: Repository<User>,
  ) {}

  async identify(roomId: string, userId: string, client: Socket) {
    const user = await this.usersEntity.findOne({where: {userId}})
    const room = await this.roomsEntity.findOne({where: {roomId}})

    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }
    if (!room) {
      throw new Error(`Room with id ${roomId} not found`);
    }

    client.join(`room-${roomId}`)
  }

  async getClientName(userId: string) {
    return await this.usersEntity.findOneBy({userId})
  }

  async create(createMessageDto: CreateMessageDto) {
    const messageEntity = await this.messagesEntity.create(createMessageDto)
    const message = await this.messagesEntity.save(messageEntity)
    console.log(message)
    return message;
  }

  async findAll() {
    return await this.messagesEntity.find();
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    const message = await this.messagesEntity.findOne({where: {id}});
    if (!message) {
      throw new Error(`Message with id ${id} not found`)
    }
    message.text = updateMessageDto.text;
    return await this.messagesEntity.save(message)
  }

  async remove(id: string) {
    const message = await this.messagesEntity.findOne({where: {id}})
    console.log(message)
    if (!message) {
      throw new Error(`Message with id ${id} not found`)
    }
    return await this.messagesEntity.remove(message);
  }
}
