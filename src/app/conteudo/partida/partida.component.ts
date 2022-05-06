import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { LoginService } from "src/app/services/login/login.service";


@Component({
  selector: "app-partida",
  templateUrl: "partida.component.html",
  styleUrls: ["partida.component.scss"]
})

export class PartidaComponent {

  constructor(serviceLogin: LoginService) {
    serviceLogin.verificaUserLogado();

    console.log("PartidaComponent constructor");
  }



}
