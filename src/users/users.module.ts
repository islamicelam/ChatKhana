import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {AuthService} from "../auth/auth.service";
import {JwtModule} from "@nestjs/jwt";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./users.entity";
import {AuthModule} from "../auth/auth.module";
import {RoomsEntity} from "../rooms/rooms.entity";

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([UsersEntity]),
        RoomsEntity
    ],
    controllers: [UsersController],
    providers: [UsersService, AuthService],
    exports: [UsersService]
})
export class UsersModule {}
