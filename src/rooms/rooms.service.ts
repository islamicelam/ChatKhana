import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Room} from "./rooms.entity";
import {Repository} from "typeorm";
import {CreateRoomDto} from "./dto/create-room.dto";

@Injectable()
export class RoomsService {
    constructor(@InjectRepository (Room)
                private roomsEntity: Repository<Room>) {
    }

    async createRoom (dto: CreateRoomDto) {
        const room = this.roomsEntity.create(dto);
        return this.roomsEntity.save(room);
    }

    async getAllRooms () {
        return this.roomsEntity.find();
    }
}
