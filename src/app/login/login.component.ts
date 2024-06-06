import { Component, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  show_password: boolean = false;
  enviando: boolean = false;
  message_error: string | null = null;

  @HostBinding("style.--app-height") height: string = window.innerHeight + "px";

  @HostListener('window:resize')
  onResize(){
    this.height = window.innerHeight + "px";
    console.log(this.height);
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberme: [false]
    });
  }

  ngSubmit(event: Event): void {
    event.preventDefault();

    // if (this.enviando) { return; }

    this.message_error = null;

    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.login(username, password);

    if (this.loginForm.get('rememberme')?.value) {
      localStorage.setItem('rememberme', 'true');
    } else {
      localStorage.removeItem('rememberme');
    }
  }

  login(username: string, password: string): void {
    if (this.loginForm.valid) {
      this.enviando = true;
      if (this.authService.login(username, password, this.loginForm.get('rememberme')?.value)) {
        this.router.navigate(['/core-bancario/cliente/consulta']);
      } else {
        this.message_error = 'Usuario y contraseña requerido';
      }
    }

    else{
      this.message_error = 'Usuario y contraseña requerido';
    }
  }

  get background(): string {
    return 'assets/fondo.webp';
  }

  get logo(): string {
    return 'assets/logo.png';
  }
}
