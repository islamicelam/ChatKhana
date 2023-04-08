import { Injectable } from '@nestjs/common';
import {UsersEntity} from "./users.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RoomsEntity} from "../rooms/rooms.entity";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersEntity)
                private userRepository: Repository<UsersEntity>) {
    }


    async createUser (dto: CreateUserDto) {
        const user = this.userRepository.create(dto);
        return this.userRepository.save(user);
    }
    async findByUsername (username: string): Promise<UsersEntity> {
        return await this.userRepository.findOneBy({ username })
    }

    async getUserRooms (userId: number): Promise<RoomsEntity[]> {
        const user = await this.userRepository.findOne({where: {userId}, relations: ['rooms']});
        return user.rooms;
    }
}
