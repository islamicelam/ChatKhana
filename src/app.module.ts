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
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class AppModule {}
