import {forwardRef, Module} from '@nestjs/common';
import {RoomsController} from "./rooms.controller";
import {RoomsService} from "./rooms.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "../users/users.entity";
import {RoomsEntity} from "./rooms.entity";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [RoomsController],
    providers: [RoomsService],
    imports: [
        TypeOrmModule.forFeature([UsersEntity, RoomsEntity]),
        forwardRef(() => AuthModule),
        JwtModule
    ],
    exports: [RoomsService]
})
export class RoomsModule {}
