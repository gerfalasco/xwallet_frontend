import { Injectable } from '@angular/core';
import { LoginService } from './services/login.service';
import { IUser } from '@cb/core/interfaces/usuario.interface';

@Injectable()
export class AuthService {
  private loggedIn: boolean = false;

  constructor(
    private loginService: LoginService,
  ) { }

  login(username: string, password: string, rememberMe: boolean): boolean {
    const user = { email: username, password: password } as IUser;
    this.loginService.getUser({ user: user }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });

    // Lógica de autenticación
    if (username === 'usuario' && password === 'core1234*') {
      this.loggedIn = true;

      if (rememberMe) {
        localStorage.setItem('loggedIn', 'true');
      } else {
        localStorage.removeItem('loggedIn');
      }

      return true;
    }

    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('loggedIn') === 'true';
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }
}
