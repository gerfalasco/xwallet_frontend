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

  setAccount({ account }: { account: IAccount | null }) {
    if (account) {
      const url = `${this.settingsService.api}api/v1/accounts`;
      return this.httpClient.post<IAccount>(url, account);
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

  updateAccount({ account }: { account: IAccount | null }) {
    if (account) {
      const url = `${this.settingsService.api}api/v1/accounts/${account.accountId}`;
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
