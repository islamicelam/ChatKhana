import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {RoomsEntity} from "./rooms.entity";
import {Repository} from "typeorm";
import {CreateRoomDto} from "./dto/create-room.dto";

@Injectable()
export class RoomsService {
    constructor(@InjectRepository (RoomsEntity)
                private roomsEntity: Repository<RoomsEntity>) {
    }

    async createRoom (dto: CreateRoomDto) {
        const room = this.roomsEntity.create(dto);
        return this.roomsEntity.save(room);
    }

    async getAllRooms () {
        return this.roomsEntity.find();
    }
}
