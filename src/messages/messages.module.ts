import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MessagesEntity} from "./entities/message.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([MessagesEntity])
  ],
  providers: [MessagesGateway, MessagesService]
})
export class MessagesModule {}
