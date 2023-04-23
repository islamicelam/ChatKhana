import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Message} from "./entities/messages.entity";
import {Room} from "../rooms/rooms.entity";
import {User} from "../users/users.entity";
import {RoomsModule} from "../rooms/rooms.module";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Message, Room, User]),
        RoomsModule,
        UsersModule
    ],
    providers: [MessagesGateway, MessagesService],
    exports: [MessagesModule]
})
export class MessagesModule {}
