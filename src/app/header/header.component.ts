import { Component, EventEmitter, OnInit, Output, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  text = "";
  vazio = "";
  classe: any = ['', '', ''];
  rankOrFilm: string = '';
  vidas = "";
  login = "Login";


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges() {

    console.log('ngOnChanges header');
  }

  buscar() {
    this.router.navigate(['/filmes', this.text]);
    console.log('buscando. header.. ' + this.text);
  }

  atualizarClasse(position: number) {
    this.classe = ['', '', ''];
    this.classe[position] = 'active';
    this.rankOrFilm = (position === 0 || position === 1) ? 'ok' : '';
    if(position === 0) {
      this.atualizarVidas();
    }
  }

  atualizarVidas() {
    this.vidas = "";
    for (let i = 0; i < 3; i++) {
      this.vidas += "<img src='https://img.icons8.com/color/30/000000/like--v3.png'/>";
    }
    this.vidas += " &nbsp; &nbsp; &nbsp;";
  }

}
