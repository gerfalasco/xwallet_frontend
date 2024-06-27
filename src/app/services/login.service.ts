import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SettingsService } from 'src/app/services/settings.service';
import { IUser } from '@cb/core/interfaces/usuario.interface';

@Injectable()
export class LoginService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly settingsService: SettingsService,
  ) { }

  getUser({ user }: { user: IUser }) {
    const url = `${this.settingsService.api}api/v1/employees/logins`;

    const body = {
      email: user.email,
      password: user.password,
    };

    return this.httpClient.post<IUser[]>(url, body);
  }
}
