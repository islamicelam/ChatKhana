import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./users/users.entity";
import { RoomsModule } from './rooms/rooms.module';
import {RoomsEntity} from "./rooms/rooms.entity";
import {ConfigModule} from "@nestjs/config";
import config from "../ormconfig";
import 'dotenv/config'

@Module({
  imports: [
      UsersModule,
      AuthModule,
      TypeOrmModule.forRoot(config),
      TypeOrmModule.forFeature([
          UsersEntity, RoomsEntity
      ]),
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      RoomsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
