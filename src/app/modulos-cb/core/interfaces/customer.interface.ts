import { IAccount } from "./account.interface";

export interface ICustomer {
  customerId: number;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerCity: string;
  accountList: IAccount[];
}