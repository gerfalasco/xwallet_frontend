export interface IIntercambio {
    originAccountId: number;
    destinationAccountId: number;
    originCustomerId: number;
    transactionType: string;
    amount: number;
}