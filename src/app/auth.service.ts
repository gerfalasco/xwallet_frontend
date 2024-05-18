import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private loggedIn: boolean = false;

  login(username: string, password: string, rememberMe: boolean): boolean {
    // Lógica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
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
