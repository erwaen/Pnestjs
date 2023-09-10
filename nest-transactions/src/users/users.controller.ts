import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Post()
    async create(
        @Body() createUserDto: CreateUserDto
    ): Promise<User> {
        return this.userService.create(createUserDto);
    }
}
