import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RoomsService} from "./rooms.service";
import {CreateRoomDto} from "./dto/create-room.dto";

@Controller('rooms')
export class RoomsController {
    constructor(
        private readonly roomsService: RoomsService
    ) {
    }

    @Post()
    // @UseGuards(JwtAuthGuard)
    async createRoom (@Body() createRoomDto: CreateRoomDto) {
        return await this.roomsService.createRoom(createRoomDto);
    }

    @Get()
    async findUserRooms (@Body() @Body() {userId}: {userId: string}) {
        return await this.roomsService.getUserRooms(userId)
    }

    @Get('find')
    async findAllRooms () {
        return await this.roomsService.getAllRooms();
    }

    @Post(':roomId/join')
    async joinRoom(@Param('roomId') roomId: string, @Body() {userId}: {userId: string}) {
        return await this.roomsService.addUserToRoom(roomId, userId)
    }
}
