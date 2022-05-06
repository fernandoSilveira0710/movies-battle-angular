import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { Const } from 'src/app/utils/const';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static userLogado: Usuario;


  constructor(private httpClient : HttpClient,private router: Router) {
    console.log('constructor LoginService');
  }

   getLogin(nickname: string, password: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(Const.URL_API_LOGIN + nickname + '/' + password)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  verificaUserLogado():boolean {
    if (LoginService.userLogado != undefined) {
      console.log('user logado');
      return true;
    }
    else{
      console.log('user não logado');
      this.router.navigate(['/login']);
      return false;
    }
  }




  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
