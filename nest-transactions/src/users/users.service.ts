import { ConflictException, Injectable } from '@nestjs/common';
import mongoose, { Model, NullExpression } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { CreateCatDto } from './dto/create-cat.dto';



@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }


    async create(createUser: CreateUserDto): Promise<User> {
        const existingUser = await this.userModel.findOne({ username: createUser.username }).exec();

        if (existingUser) {
            // If a user with the same username already exists, throw a conflict exception
            throw new ConflictException('Username already exists');
        }
        const createdUser = new this.userModel({ hashedPassword: createUser.password, name: createUser.name, username: createUser.username });
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        const users = this.userModel.find().exec();
        return users;
    }

    async findByUsername(username: string): Promise<User> {
        const user = await this.userModel.findOne({ username: username }).exec();
        if (!user) {
            throw new ConflictException('Not username found');
        }

        return user;
    }

    async findById(id: string): Promise<User> {
        const existingUser = await this.userModel.findById(id);

        if (!existingUser) {
            throw new ConflictException('User does not exist');
        }

        return existingUser;
    }

    async update(id: string, updateUser: UpdateUserDto): Promise<User | NullExpression> {
        return this.userModel.findByIdAndUpdate(id, updateUser, { new: true });
    }

    async delete(id: string): Promise<any> {
        var ObjectId = mongoose.Types.ObjectId;

        try {
            const removedUser = this.userModel.findByIdAndRemove(new ObjectId(id));
            return removedUser;
        } catch (error) {
            throw new ConflictException('User does not exist');
        }

    }


}



