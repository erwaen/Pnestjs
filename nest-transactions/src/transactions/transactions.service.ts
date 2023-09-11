import { ConflictException, Injectable } from '@nestjs/common';
import mongoose, { Model, NullExpression } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Transaction } from './schemas/transaction.schema';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { User } from 'src/users/schemas/users.schema';
import { UpdateTransactionDto } from './dto/update-transaction.dto';


// import { CreateCatDto } from './dto/create-cat.dto';



@Injectable()
export class TransactionsService {
    constructor(
        @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
        @InjectModel(User.name) private userModel: Model<User>,

    ) { }

    async create(createTransaction: CreateTransactionDto): Promise<Transaction> {
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

    async findById(id: string): Promise<Transaction> {

        try {
            const existingTransaction = await this.transactionModel.findById(id);
            if (!existingTransaction) {
                throw new ConflictException('Transaction does not exist');

            }
            return existingTransaction;
        } catch {
            throw new ConflictException('Transaction does not exist');

        }

    }

    async update(id: string, updatedTransaction: UpdateTransactionDto): Promise<Transaction | NullExpression>{
        return this.transactionModel.findByIdAndUpdate(id, updatedTransaction, { new: true });
    }

    async delete(id: string): Promise<any> {
        var ObjectId = mongoose.Types.ObjectId;

        try {
            const removedTransaction = this.transactionModel.findByIdAndRemove(new ObjectId(id));
            return removedTransaction;
        } catch (error) {
            throw new ConflictException('Transaction does not exist');
        }

    }


}



