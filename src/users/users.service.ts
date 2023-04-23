import { Injectable } from '@nestjs/common';
import {User} from "./users.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Room} from "../rooms/rooms.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository (Room) private roomsEntity: Repository<Room>,
        @InjectRepository (User) private usersEntity: Repository<User>
    ) {}


    async createUser (dto: CreateUserDto) {
        const user = this.usersEntity.create(dto);
        return this.usersEntity.save(user);
    }
    async findByUsername (username: string): Promise<User> {
        return await this.usersEntity.findOneBy({ username })
    }

    // async getUserRooms (userId: string): Promise<Room[]> {
    //     const user = await this.usersEntity.findOne({where: {userId}, relations: ['rooms']});
    //     return user.rooms;
    // }


}
