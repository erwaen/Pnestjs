import { IsString, IsNumber } from 'class-validator';


export class CreateTransactionDto {

    @IsNumber()
    readonly amount: number;

    @IsString()
    readonly type: string;

    @IsString()
    readonly owner_id: string;
}