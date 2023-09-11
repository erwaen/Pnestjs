import { IsString, IsNumber } from 'class-validator';


export class CreateUserDto {

    @IsString()
    readonly name: string;

    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;
}