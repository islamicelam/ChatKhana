import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./users/users.entity";
import { RoomsModule } from './rooms/rooms.module';
import {RoomsEntity} from "./rooms/rooms.entity";
import {ConfigModule} from "@nestjs/config";
import { MessagesModule } from './messages/messages.module';
import config from "../ormconfig";
import {MessagesEntity} from "./messages/entities/message.entity";

@Module({
  imports: [
      UsersModule,
      AuthModule,
      TypeOrmModule.forRoot(config),
      TypeOrmModule.forFeature([
          UsersEntity, RoomsEntity, MessagesEntity
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
