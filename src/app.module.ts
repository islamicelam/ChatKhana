import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users/users.entity";
import { RoomsModule } from './rooms/rooms.module';
import {Room} from "./rooms/rooms.entity";
import {ConfigModule} from "@nestjs/config";
import { MessagesModule } from './messages/messages.module';
import config from "../ormconfig";
import {Message} from "./messages/entities/messages.entity";

@Module({
  imports: [
      UsersModule,
      AuthModule,
      TypeOrmModule.forRoot(config),
      TypeOrmModule.forFeature([
          User, Room, Message
      ]),
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      RoomsModule,
      MessagesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
