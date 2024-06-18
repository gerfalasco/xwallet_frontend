import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SettingsService } from 'src/app/services/settings.service';
import { IIntercambio } from '../interfaces/intercambio.interface';
import { IAccount } from '../interfaces/account.interface';
import { IInversion } from '../interfaces/inversion.interface';

@Injectable()
export class MovementService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly settingsService: SettingsService,
  ) { }

  exchange({ intercambio }: { intercambio: IIntercambio}) {
    if (intercambio) {
      const url = `${this.settingsService.api}api/v1/operations/exchanges`;

      const body = {
        "originAccountId": intercambio.originAccountId,
        "destinationAccountId": intercambio.destinationAccountId,
        "originCustomerId": intercambio.originCustomerId,
        "transactionType": intercambio.transactionType,
        "amount": intercambio.amount
      };

      return this.httpClient.post<IAccount>(url, body);
    }

    else {
      const errorResponse = {
        titulo: "Error Movimiento",
        message: "el movimiento debe tener un valor."
      };
      throw new Error(JSON.stringify(errorResponse));
    }
  }

  investment({ inversion }: { inversion: IInversion}) {
    if (inversion) {
      const url = `${this.settingsService.api}api/v1/operations/investments`;

      const body = {
        "accountId": inversion.accountId,
        "customerId": inversion.customerId,
        "investmentDays": inversion.investmentDays,
        "investmentAmount": inversion.investmentAmount
      };

      return this.httpClient.post<IAccount>(url, body);
    }

    else {
      const errorResponse = {
        titulo: "Error Movimiento",
        message: "el movimiento debe tener un valor."
      };
      throw new Error(JSON.stringify(errorResponse));
    }
  }
}
