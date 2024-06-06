import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SettingsService } from 'src/app/services/settings.service';
import { ICustomer } from '../interfaces/customer.interface';

@Injectable()
export class CustomerService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly settingsService: SettingsService
  ) { }

  getCustomers() {
    const url = `${this.settingsService.api}api/v1/customers`;
    return this.httpClient.get<ICustomer[]>(url);
  }

  getCustomer({ customerId }: { customerId: number }) {
    const url = `${this.settingsService.api}api/v1/customers/${customerId}`;
    return this.httpClient.get<ICustomer>(url);
  }

  setCustomer({ customer }: { customer: ICustomer | null }) {
    if (customer) {
      const url = `${this.settingsService.api}api/v1/customers`;
      return this.httpClient.post<ICustomer>(url, customer);
    }

    else {
      const errorResponse = {
        titulo: "Error Customer",
        message: "Customer debe tener un valor."
      };
      throw new Error(JSON.stringify(errorResponse));
    }
  }

  deleteCustomer({ customerId }: { customerId: number }) {
    const url = `${this.settingsService.api}api/v1/customers/${customerId}`;
    return this.httpClient.delete(url);
  }

  updateCustomer({ customer }: { customer: ICustomer | null }) {
    if (customer) {
      const url = `${this.settingsService.api}api/v1/customers/${customer.customerId}`;
      return this.httpClient.put<ICustomer>(url, customer);
    }

    else {
      const errorResponse = {
        titulo: "Error Customer",
        message: "Customer debe tener un valor."
      };
      throw new Error(JSON.stringify(errorResponse));
    }
  }
}
