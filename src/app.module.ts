import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./users/users.entity";
import { RoomsService } from './rooms/rooms.service';
import { RoomsController } from './rooms/rooms.controller';
import { RoomsModule } from './rooms/rooms.module';
import config from "../ormconfig";
import {RoomsEntity} from "./rooms/rooms.entity";
import {UsersController} from "./users/users.controller";
import {UsersService} from "./users/users.service";
import {AuthController} from "./auth/auth.controller";
import {AuthService} from "./auth/auth.service";

@Module({
  imports: [
      UsersModule,
      AuthModule,
      TypeOrmModule.forRoot(config),
      TypeOrmModule.forFeature([
          UsersEntity, RoomsEntity
      ]),
      RoomsModule
  ],
  controllers: [], //wtf
  providers: [], //wtf
})
export class AppModule {}
