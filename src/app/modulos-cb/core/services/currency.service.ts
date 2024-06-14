import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICurrency } from '../interfaces/currency.interface';

@Injectable()
export class CurrencyService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getCurrencies() {
    const url = 'assets/server/currency.json';  // URL to JSON file
    return this.httpClient.get<ICurrency[]>(url);
  }
}
