import {Body, Controller, Post} from '@nestjs/common';
import { AuthService } from "./auth.service";
import {LoginDto} from "./dto/login-dto";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('/login')
    login (@Body() loginDto: LoginDto){
        return this.authService.login(loginDto)
    }

    @Post('/signup')
     registration (@Body() createUserDto: CreateUserDto) {
        return this.authService.registration(createUserDto)
    }
}
