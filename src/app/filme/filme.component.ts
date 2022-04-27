import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Busca } from '../domain/busca';
import { ApoService } from '../services/apo.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit,OnChanges {
  @Input() text : any;
  color: ThemePalette = 'accent';
  busca!: Busca;
  erro!: boolean;
  loading!: boolean;

  constructor(private rankingService: ApoService) { }

  ngOnInit(): void {
    this.getRankings();
    this.erro = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges()");
    this.getRankings();
  }


  getRankings() {
    console.log("getRankings()");
    this.busca = new Busca();
    this.erro = false;
    if (this.text != undefined) {
      console.log("não está vazio : " + this.text.texto);
      this.loading = true;
      this.rankingService.getRanking(this.text.texto).subscribe((buscas: Busca) => {
        if (buscas.Search != null) {
          console.log("if");
          this.busca = buscas;
          this.loading = false;
          this.erro = false;
        } else {
          console.log("else");
          this.erro = true;
          this.loading = false;

        }
      });
    }
    // console.log("tamanho do array: " + this.rankings.length);
  }

  buscar(): void {
    console.log("buscar()");
    this.getRankings();
  }

}
