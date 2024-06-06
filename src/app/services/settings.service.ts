import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SettingsService {
  private _api$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private httpClient: HttpClient) { }

  get api$(): Observable<string> {

    return this._api$.asObservable();

  }

  get api(): string {

    return this._api$.value;

  }

  get() {
    this.httpClient.get<any>("assets/server/appsettings.json").subscribe(
      (setting: any) => {
        try {
          this._api$.next(setting?.api);
        } catch {
          console.log("Error de lectura en appsettings.json");
          console.log("Error de lectura en variable urlBase");
        }
      },
      (error) => {
        console.log("No existe appsetting.json", error);
      }
    );
  }
}
