import {Body, Controller, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        await this.usersService.createUser(createUserDto)
    }

    // @Get(':userId/rooms')
    // async getRooms(@Param('userId') userId: string): Promise<Room[]> {
    //     return await this.usersService.getUserRooms(userId)
    // }

    //
    // @Get()
    // async findAll(): Promise <User[]> {
    //     return this.usersService.findAll();
    // }
}
