import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './schemas/transaction.schema';
import { TransactionsService } from './transactions.service';
import { Body, Controller, Get, Post } from '@nestjs/common';


@Controller('transactions')
export class TransactionsController {
    constructor(private transactionService: TransactionsService) {}

    @Get()
    async getAll(): Promise<Transaction[]> {
        return this.transactionService.findAll()
    }

    @Post()
    async create(
        @Body() createTransactionDto: CreateTransactionDto
    ): Promise<Transaction> {
        return this.transactionService.create(createTransactionDto);
    }
    
}
