import { Usuario } from 'src/app/model/usuario';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nickname!: string;
  password!: string;
  mensagem: string = "";

  constructor(private serviceLogin: LoginService, private router: Router) {
    console.log('constructor LoginComponent');
    if (serviceLogin.verificaUserLogado()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit LoginComponent');
  }

  logar() {
    console.log('logar LoginComponent');
    this.serviceLogin.getLogin(this.nickname, this.password).subscribe((usuario : Usuario) => {
      if (usuario != null) {
        LoginService.userLogado = usuario;
        this.router.navigate(['/home']);
        this.mensagem = "Usuario logado com sucesso";
      }
    });
    this.mensagem = "Usuario ou senha incorretos";
  }
}
