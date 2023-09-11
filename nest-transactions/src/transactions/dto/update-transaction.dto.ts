import { IsString, IsNumber } from 'class-validator';


export class UpdateTransactionDto {

    @IsNumber()
    readonly amount: number;

    @IsString()
    readonly type: string;
}