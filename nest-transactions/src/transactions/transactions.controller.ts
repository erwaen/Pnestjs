import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './schemas/transaction.schema';
import { TransactionsService } from './transactions.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';


@Controller('transactions')
export class TransactionsController {
    constructor(private transactionService: TransactionsService) {}

    @Get()
    async getAll(): Promise<Transaction[]> {
        return this.transactionService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.transactionService.findById(id);
    }

    @Post()
    async create(
        @Body() createTransactionDto: CreateTransactionDto
    ): Promise<Transaction> {
        return this.transactionService.create(createTransactionDto);
    }
    
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateTransactionDto) {
      return this.transactionService.update(id, updateUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.transactionService.delete(id);
    }

}

    
