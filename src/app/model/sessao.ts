import { Filme } from './../domain/filme';
export class Sessao {
  id!: number;
  imdbIdFilmes! : Filme[];
  tamanho!: number;
  respondido! : boolean;

  constructor() { }

 }
