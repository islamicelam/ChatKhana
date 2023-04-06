import {IsEmail, IsString, Length} from "class-validator";


export class LoginDto {
    @IsString({message: "Should be string"})
    @IsEmail({}, {message: "Wrong email"})
    readonly username: string;
    @IsString({message: "Should be string"})
    readonly password: string;
}