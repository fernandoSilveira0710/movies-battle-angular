import { Sessao } from './sessao';
export class Partida {
  id!: number;
  vidas!: number;
  ativo!: boolean;
  pontos!: number;
  sessao!: Sessao;

 constructor() { }
}
