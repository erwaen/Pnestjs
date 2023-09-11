import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    async getAll(): Promise<User[]> {
        return this.usersService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.usersService.findById(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Post()
    async create(
        @Body() createUserDto: CreateUserDto
    ): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }

}
