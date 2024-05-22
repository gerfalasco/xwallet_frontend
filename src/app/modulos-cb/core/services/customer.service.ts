import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICustomer } from '../interfaces/customer.interface';

@Injectable()
export class CustomerService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getCustomer() {
    const url = "assets/server/customer.json"; 
    return this.httpClient.get<ICustomer>(url);
  }
}
