export interface ITransferencia {
    originAccountId: number;
    destinationAccountId: number;
    originCustomerId: number;
    transactionType: string;
    amount: number;
}