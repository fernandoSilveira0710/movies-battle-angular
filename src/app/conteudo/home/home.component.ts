import { RodadaService } from './../../services/partida/rodada.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/domain/filme';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaFilmes: Filme[] = [];
  usuario!: Usuario | null;

  constructor(private serviceLogin: LoginService, private serviceRodada: RodadaService) {
    this.usuario = this.serviceLogin.verificaUserLogado();
    if (this.usuario != null) {
      this.buscaRodada(this.usuario);
    }
  }

  ngOnInit(): void {
  }

  private buscaRodada(usuario: Usuario): void {
    this.serviceRodada.getRodada(usuario.user, usuario.password).subscribe(
      (filmes: Filme[]) => {
        console.table(filmes);
        this.listaFilmes = filmes;
      }
    );
  }






}
