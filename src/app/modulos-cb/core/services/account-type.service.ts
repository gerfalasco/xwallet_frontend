import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IAccountType } from '../interfaces/account-type.interface';

@Injectable()
export class AccountTypeService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getAccountsType() {
    const url = 'assets/server/accountType.json'; 
    return this.httpClient.get<IAccountType[]>(url);
  }
}
