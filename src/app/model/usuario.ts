import { Partida } from "./partida";
import { Ranking } from "./ranking";

export class Usuario {
  id!: number ;
  user!: string;
  password!: string;
  partida!: Partida;
  ranking!: Ranking;

  constructor() { }


}
