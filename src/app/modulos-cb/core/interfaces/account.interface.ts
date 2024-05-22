import { ICustomer } from "./customer.interface";

export interface IAccount {
  Id: number;
  Balance: number;
  Type: number;
  Currency: string;
  Customer: ICustomer;
}