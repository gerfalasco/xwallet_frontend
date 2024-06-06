import { InjectFlags, InjectionToken, Injector, ProviderToken, Type } from '@angular/core';

export class ModalInjector<T> implements Injector {
  constructor(private _parentInjector: Injector, private _additionalTokens: WeakMap<object, T>) {}

  get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
  get(token: any, notFoundValue?: any);
  get(token: ProviderToken<T>, notFoundValue?: T): T {
    const value = this._additionalTokens.get(token);

    if (value) return value;

    return this._parentInjector.get<T>(token, notFoundValue);
  }
}
