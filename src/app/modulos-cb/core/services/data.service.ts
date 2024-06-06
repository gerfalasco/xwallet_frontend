import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICustomer } from '../interfaces/customer.interface';

@Injectable()
export class DataService {
  private _customerSource$ = new BehaviorSubject<ICustomer | null>(null);
  
  // Exposing the current value as an Observable
  get customerSource$(): Observable<ICustomer | null> {
    return this._customerSource$.asObservable();
  }

  // Direct access to the current value
  get currentCustomer(): ICustomer | null {
    return this._customerSource$.value;
  }

  constructor() { }

  changeData(data: ICustomer | null) {
    this._customerSource$.next(data);
  }
}
