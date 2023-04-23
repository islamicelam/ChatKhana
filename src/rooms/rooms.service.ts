import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Room} from "./rooms.entity";
import {Repository} from "typeorm";
import {CreateRoomDto} from "./dto/create-room.dto";
import {User} from "../users/users.entity";

@Injectable()
export class RoomsService {
    constructor(
        @InjectRepository (Room) private roomsEntity: Repository<Room>,
        @InjectRepository (User) private usersEntity: Repository<User>
    ){}

    async createRoom (dto: CreateRoomDto) {
        const room = this.roomsEntity.create(dto);
        await this.roomsEntity.save(room)
        return room;
    }

    async getAllRooms () {
        return this.roomsEntity.find();
    }

    async addUserToRoom(roomId: string, userId: string){
        const room = await this.roomsEntity.findOne({
            where: { roomId },
            relations: { users: true }
        });
        const user = await this.usersEntity.findOneOrFail({
            where: { userId }
        });
        if (!user) {
            throw new Error(`User with ID ${userId} not found`);
        }
        console.log(room)
        user.userId = userId
        room.users.push(user)
        console.log(room)

        return await this.roomsEntity.save(room)
    }
}
