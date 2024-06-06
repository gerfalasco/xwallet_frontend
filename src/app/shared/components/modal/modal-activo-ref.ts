import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ModalActivoRef<T = any, R = any> {
  
  constructor() {
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  respuesta(valor: R): void {
    this._respuesta.next(valor);
  }

  public instancia!: T;

  cerrar(valor?: R): void {
    this._respuesta.error(valor);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly _respuesta: Subject<R> = new Subject<R>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public get respuesta$(): Observable<R> {
    return this._respuesta.asObservable();
  }
}
