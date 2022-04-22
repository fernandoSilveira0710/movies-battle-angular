import { Search } from './../domain/search';
import { Busca } from './../domain/busca';
import { ApoService } from './../services/apo.service';
import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  busca!: Busca;
  text!: string;
  erro! : boolean;

  constructor(private rankingService : ApoService) { }

  ngOnInit(): void {
    this.getRankings();
  }

  getRankings() {
    console.log("getRankings()");
    this.rankingService.getRanking(this.text).subscribe((buscas: Busca) => {
      if (buscas.Search != null) {
        console.log("if");
        this.busca = buscas;
        this.erro = false;
      }else{
        console.log("else");

        this.erro = true;
      }
    });
   // console.log("tamanho do array: " + this.rankings.length);
  }

  buscar() : void {
    console.log("buscar()");
    this.getRankings();
  }

  fecharNotificacoes() : void {
    console.log("fecharNotificacoes()");
    this.erro = false;
  }


}
