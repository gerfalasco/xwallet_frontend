export interface ITransferencia {
    originAccountId: number;
    destinationAccountId: number;
    customerId: number;
    transactionType: string;
    amount: number;
}