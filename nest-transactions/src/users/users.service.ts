import { ConflictException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
// import { CreateCatDto } from './dto/create-cat.dto';



@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}


    async create(createUser: CreateUserDto): Promise<User> {
        const existingUser = await this.userModel.findOne({ username: createUser.username }).exec();
    
        if (existingUser) {
        // If a user with the same username already exists, throw a conflict exception
            throw new ConflictException('Username already exists');
        }
        const createdUser = new this.userModel({hashedPassword: createUser.password, name:createUser.name, username:createUser.username});
        return createdUser.save();
    }
    
    async findAll(): Promise<User[]> {
        const users = this.userModel.find().exec();
        return users;
    }


}



