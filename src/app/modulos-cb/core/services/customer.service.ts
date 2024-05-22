import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ICustomer } from '../interfaces/customer.interface';
import { SettingsService } from 'src/app/services/settings.service';

@Injectable()
export class CustomerService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly settingsService: SettingsService
  ) { }

  getApi(){    
    const url = this.settingsService.api + "api/v1/customers/test";
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    return this.httpClient.get<any>(url, { headers: headers, responseType: 'text' as 'json'});
  }

  getCustomer() {
    const url = "assets/server/customer.json"; 
    return this.httpClient.get<ICustomer>(url);
  }
}
