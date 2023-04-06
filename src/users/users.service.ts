import { Injectable } from '@nestjs/common';
import {UsersEntity} from "./users.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersEntity)
                private userRepository: Repository<UsersEntity>) {
    }


    async createUser (dto: CreateUserDto) {
        const user = this.userRepository.create(dto);
        return this.userRepository.save(user);
    }
    async findByUsername (username: string): Promise<UsersEntity | null> {
        return await this.userRepository.findOneBy({ username })
    }
}
