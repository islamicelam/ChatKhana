import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {RoomsService} from "./rooms.service";
import {CreateRoomDto} from "./dto/create-room.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    createRoom (@Body() createRoomDto: CreateRoomDto) {
        return this.roomsService.createRoom(createRoomDto);
    }

    @Get()
    findAllRooms () {
        return this.roomsService.getAllRooms();
    }
}
