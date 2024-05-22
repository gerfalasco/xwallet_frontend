import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IAccount } from '../interfaces/account.interface';

@Injectable()
export class AccountService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getAccount() {
    const url = "assets/server/account.json"; 
    return this.httpClient.get<IAccount>(url);
  }
}
