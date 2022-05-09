import { Const } from 'src/app/utils/const';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from '../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nickname!: string;
  password!: string;
  mensagem: string = "";
  loading:boolean = false;
  color: ThemePalette = 'accent';

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
    this.loading = true;
    this.serviceLogin.getLogin(this.nickname, this.password).subscribe((usuario : Usuario) => {
      if (usuario != null) {
        console.table(usuario);
        this.serviceLogin.setUserLocalStorage(usuario);
        this.router.navigate(['/home']);
        this.mensagem = "Usuario logado com sucesso";
        this.loading = false;
      }else{
        this.mensagem = "Usuario ou senha incorretos";
        this.loading = false;
      }
    });
    this.dispararTempo(8,"Usuario ou senha incorretos");
  }

  dispararTempo(tempo: number, mensagem: string) {
    this.mensagem = "Lutando para encontrar esse usuário";
    setTimeout(() => {
      this.mensagem = mensagem;
      this.loading = false;
    }
    , tempo * 1000);
  }

}
