import {forwardRef, Module} from '@nestjs/common';
import {RoomsController} from "./rooms.controller";
import {RoomsService} from "./rooms.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/users.entity";
import {Room} from "./rooms.entity";
import {JwtModule} from "@nestjs/jwt";
import {AuthModule} from "../auth/auth.module";
import {UsersModule} from "../users/users.module";
import {UsersService} from "../users/users.service";

@Module({
    controllers: [RoomsController],
    providers: [RoomsService, UsersService],
    imports: [
        TypeOrmModule.forFeature([User, Room]),
        forwardRef(() => AuthModule),
        forwardRef(() => UsersModule),
        JwtModule,
    ],
    exports: [RoomsService]
})
export class RoomsModule {}
