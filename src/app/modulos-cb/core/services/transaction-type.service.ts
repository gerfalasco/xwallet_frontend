import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ITransactionType } from '../interfaces/transaction-type.interface';

@Injectable()
export class TransactionTypeService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getTransactionTypes() {
    const url = 'assets/server/transactionType.json';  // URL to JSON file
    return this.httpClient.get<ITransactionType[]>(url);
  }
}
