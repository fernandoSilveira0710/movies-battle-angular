import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  classe: any = ['', '', ''];
  vazio = "";

  constructor() { }

  ngOnInit(): void {
  }


  atualizarClasse(position: number) {
    this.classe = ['', '', ''];
    this.classe[position] = 'active';
  }

}
