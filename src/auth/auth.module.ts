import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from "@nestjs/jwt";
import {UsersModule} from "../users/users.module";
import {RoomsModule} from "../rooms/rooms.module";

@Module({
  imports: [
      forwardRef(() => UsersModule),
      RoomsModule,
      JwtModule.register({
        secret: process.env.PRIVATE_KEY || "SECRET",
        signOptions: {
          expiresIn: '24h'
        }
      })

  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
