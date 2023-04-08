import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersEntity} from "./users.entity";
import {RoomsEntity} from "../rooms/rooms.entity";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        await this.usersService.createUser(createUserDto)
    }

    @Get(':userId/rooms')
    getRooms(@Param('userId') userId: number): Promise<RoomsEntity[]> {
        return this.usersService.getUserRooms(userId)
    }
    //
    // @Get()
    // async findAll(): Promise <User[]> {
    //     return this.usersService.findAll();
    // }
}
