import { Injectable } from '@nestjs/common';
import {User} from "./users.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Room} from "../rooms/rooms.entity";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
                private userRepository: Repository<User>) {
    }


    async createUser (dto: CreateUserDto) {
        const user = this.userRepository.create(dto);
        return this.userRepository.save(user);
    }
    async findByUsername (username: string): Promise<User> {
        return await this.userRepository.findOneBy({ username })
    }

    async getUserRooms (userId: number): Promise<Room[]> {
        const user = await this.userRepository.findOne({where: {userId}, relations: ['rooms']});
        return user.rooms;
    }
}
