import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersEntity} from "../users/users.entity";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {CreateUserDto} from "../users/dto/create-user.dto";
import * as bcrypt from "bcryptjs"
import {LoginDto} from "./dto/login-dto";

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}
    async validateUser(userDto: LoginDto): Promise<any> {
        const user = await this.usersService.findByUsername(userDto.username);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        } else {
            throw new UnauthorizedException({ message: 'Wrong username or password' });
        }
    }

    async login (userDto: LoginDto) {
        const user = await this.validateUser(userDto);
        console.log(user)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.usersService.findByUsername(userDto.username)
        if (candidate) {
            throw new HttpException('User already exist', HttpStatus.BAD_REQUEST )
        }
        console.log(userDto)
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.usersService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken (user: UsersEntity) {
        const payload = {email: user.email, id: user.userId}
        return {
            token: this.jwtService.sign(payload)
        }
    }
}


