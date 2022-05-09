import { Const } from './../utils/const';
import { LoginService } from 'src/app/services/login/login.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {
  text = "";
  vazio = "";
  classe: any = ['', '', ''];
  rankOrFilm: string = '';
  vidas = "";
  logado = true;


  constructor(private router: Router, private serviceLogin: LoginService) {
    this.serviceLogin.isAuthenticatedObs.subscribe(isAuthenticated => this.logado = isAuthenticated);
    console.log('constructor header: logado=>'+ this.logado);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy header');
  }

  ngOnInit(): void {
    console.log('ngOnInit header');
  }

  ngOnChanges() {
    console.log('ngOnChanges header');
  }
  logout() {
    this.serviceLogin.logout();
  }


  buscar() {
    this.router.navigate(['/filmes', this.text]);
    console.log('buscando. header.. ' + this.text);
    this.limparText();
  }

  limparText() {
    this.text = "";
  }

  atualizarClasse(position: number) {
    this.classe = ['', '', ''];
    this.classe[position] = 'active';
    this.rankOrFilm = (position === 0 || position === 1) ? 'ok' : '';
    if (position === 0) {
      this.atualizarVidas();
    }
  }

  atualizarVidas() {
    this.vidas = "";
    var qtd =  this.serviceLogin.getUserLocalStorage()?.partida.vidas;
    console.log('qtd vidas: ' + qtd);
    qtd = (qtd == null) ? 3 : qtd;
    for (let i = 0; i < qtd; i++) {
      this.vidas += "<img src='https://img.icons8.com/color/30/000000/like--v3.png'/>";
    }
    this.vidas += " &nbsp; &nbsp; &nbsp;";
  }

}
