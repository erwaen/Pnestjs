export class CreateTransactionDto {
    readonly amount: number;
    readonly type: string;
    readonly owner_id: string;
}