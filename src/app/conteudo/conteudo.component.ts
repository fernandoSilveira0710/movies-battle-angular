import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {

  constructor(serviceLogin: LoginService) {
    serviceLogin.verificaUserLogado();
  }

  ngOnInit(): void {
  }

}
