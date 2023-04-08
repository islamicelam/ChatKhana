import { Module } from '@nestjs/common';
import {RoomsController} from "./rooms.controller";
import {RoomsService} from "./rooms.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "../users/users.entity";
import {RoomsEntity} from "./rooms.entity";

@Module({
    controllers: [RoomsController],
    providers: [RoomsService],
    imports: [
        TypeOrmModule.forFeature([UsersEntity, RoomsEntity])
    ],
    exports: [RoomsService]
})
export class RoomsModule {}
