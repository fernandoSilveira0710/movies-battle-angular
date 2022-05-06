import { Busca } from '../../domain/busca';
import { ApoService } from '../../services/imdbapi/imdbapi.service';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(serviceLogin: LoginService) {
    serviceLogin.verificaUserLogado();
  }

}
