import {IsString, Length} from "class-validator";

export class CreateRoomDto {
    @IsString({message: "Should be string"})
    @Length(3, 15, {message: "Should be 3-15 symbols"})
    readonly roomName: string;

    @IsString({message: "Should be string"})
    @Length(3, 50, {message: "Should be 3-50 symbols"})
    readonly description: string;
    readonly ownerId: number;
}