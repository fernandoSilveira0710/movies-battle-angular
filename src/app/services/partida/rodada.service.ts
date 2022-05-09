import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Filme } from 'src/app/domain/filme';
import { Const } from 'src/app/utils/const';

@Injectable({
  providedIn: 'root'
})
export class RodadaService {

  constructor(private httpClient: HttpClient, private router: Router) {
    console.log('constructor RodadaService');
  }

  getRodada(nickname: string, password: string): Observable<Filme[]> {
    return this.httpClient.post<Filme[]>(Const.INICIAR_RODADA,{ nick : nickname,senha : password})
      .pipe(
        retry(2),
        catchError(this.handleError));
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
