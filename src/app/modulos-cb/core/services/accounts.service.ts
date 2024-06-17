import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SettingsService } from 'src/app/services/settings.service';
import { IAccount } from '../interfaces/account.interface';

@Injectable()
export class AccountService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly settingsService: SettingsService,
  ) { }

  getAccounts() {
    const url = `${this.settingsService.api}api/v1/accounts`;
    return this.httpClient.get<IAccount[]>(url);
  }

  getAccount({ accountId }: { accountId: number }) {
    const url = `${this.settingsService.api}api/v1/accounts/${accountId}`;
    return this.httpClient.get<IAccount>(url);
  }

  setAccount({ account, customerId }: { account: IAccount, customerId: number}) {
    if (account) {
      const url = `${this.settingsService.api}api/v1/accounts`;

      const body = {
        "customerId": customerId,
        "accountBalance": account.accountBalance,
        "accountType": account.accountType,
        "accountCurrency": account.accountCurrency
      };

      return this.httpClient.post<IAccount>(url, body);
    }

    else {
      const errorResponse = {
        titulo: "Error Account",
        message: "Account debe tener un valor."
      };
      throw new Error(JSON.stringify(errorResponse));
    }
  }

  deleteAccount({ accountId }: { accountId: number }) {
    const url = `${this.settingsService.api}api/v1/accounts/${accountId}`;
    return this.httpClient.delete(url);
  }

  updateAccount({ account, customerId }: { account: IAccount, customerId: number}) {
    if (account) {
      const url = `${this.settingsService.api}api/v1/accounts/${account.accountId}`;

      const body = {
        "accountId": account.accountId,
        "customerId": customerId,
        "accountBalance": account.accountBalance,
        "accountType": account.accountType,
        "accountCurrency": account.accountCurrency
      };

      return this.httpClient.put<IAccount>(url, account);
    }

    else {
      const errorResponse = {
        titulo: "Error Account",
        message: "Account debe tener un valor."
      };
      throw new Error(JSON.stringify(errorResponse));
    }
  }
}
