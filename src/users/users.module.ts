import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {AuthService} from "../auth/auth.service";
import {JwtModule} from "@nestjs/jwt";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users.entity";
import {AuthModule} from "../auth/auth.module";
import {Room} from "../rooms/rooms.entity";
import {RoomsModule} from "../rooms/rooms.module";

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => RoomsModule),
        TypeOrmModule.forFeature([User, Room]),
        JwtModule,
    ],
    controllers: [UsersController],
    providers: [UsersService, AuthService],
    exports: [UsersService]
})
export class UsersModule {}
