import { IMovement } from "./movement";

export interface IAccount {
  accountId: number;
  accountBalance: number;
  accountType: string;
  accountCurrency: string;
  movementListList: IMovement[];
}