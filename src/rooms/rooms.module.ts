import {forwardRef, Module} from '@nestjs/common';
import {RoomsController} from "./rooms.controller";
import {RoomsService} from "./rooms.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/users.entity";
import {Room} from "./rooms.entity";
import {JwtModule} from "@nestjs/jwt";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [RoomsController],
    providers: [RoomsService],
    imports: [
        TypeOrmModule.forFeature([User, Room]),
        forwardRef(() => AuthModule),
        JwtModule
    ],
    exports: [RoomsService]
})
export class RoomsModule {}
