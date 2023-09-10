import { ConflictException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Transaction } from './schemas/transaction.schema';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { User } from 'src/users/schemas/users.schema';


// import { CreateCatDto } from './dto/create-cat.dto';



@Injectable()
export class TransactionsService {
    constructor(
        @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
        @InjectModel(User.name) private userModel: Model<User>,

    ) { }

    async create(createTransaction: CreateTransactionDto): Promise<Transaction> {
        console.log("hola");
        console.log(createTransaction.owner_id);
        try {
            const existingUser = await this.userModel.findById(createTransaction.owner_id);
            const createdTransaction = new this.transactionModel({ amount: createTransaction.amount, type: createTransaction.type, owner: existingUser });
            return createdTransaction.save();
        } catch {
            throw new ConflictException('owner_id does not exist');

        }
    }

    async findAll(): Promise<Transaction[]> {
        const transactions = this.transactionModel.find().exec();
        return transactions;
    }

    async findByUsername(username: string): Promise<User> {
        const user = await this.userModel.findOne({ username: username }).exec();
        if (!user) {
            throw new ConflictException('Not username found');
        }

        return user;
    }


}



