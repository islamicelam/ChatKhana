import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto {
    @IsString({message: "Should be string"})
    @IsEmail({}, {message: "Wrong email"})
    readonly email: string;
    @IsString({message: "Should be string"})
    @Length(4, 16, {message: "Should be 4-16 symbols"})
    readonly password: string;
    @IsString({message: "Should be a string"})
    readonly username: string;
}