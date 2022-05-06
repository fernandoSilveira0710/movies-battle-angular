export class Const {
  //static readonly URL_API = 'https://movies-battle-api.herokuapp.com/api';
  static readonly URL_API = 'https://infinite-tor-95287.herokuapp.com/api';
  static readonly URL_API_MOVIES = 'https://www.omdbapi.com/?apikey=d329b10e&s=';
  static readonly URL_API_USERS = Const.URL_API + '/users';
  static readonly URL_API_LOGIN = Const.URL_API + '/login/';
  static readonly INICIAR_PARTIDA = Const.URL_API + '/partida/novo';
  static readonly INICIAR_RODADA = Const.URL_API + '/partida/rodada';
  static readonly RESPOSTA_PARTIDA = Const.URL_API + '/partida/resposta';
  static readonly ENCERRAR_PARTIDA = Const.URL_API + '/partida/encerrar';
}
