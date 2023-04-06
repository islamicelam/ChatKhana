import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        await this.usersService.createUser(createUserDto)
    }
    //
    // @Get()
    // async findAll(): Promise <User[]> {
    //     return this.usersService.findAll();
    // }
}
