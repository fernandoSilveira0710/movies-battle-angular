import { Busca } from './../domain/busca';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { GenericRanking } from '../dto/generic-ranking';

@Injectable({
  providedIn: 'root'
})
export class ApoService {

url = 'http://localhost:8080/api/ranking'; // api rest fake
urlDireta = 'https://www.omdbapi.com/?apikey=d329b10e&s=';

// injetando o HttpClient
constructor(private httpClient: HttpClient) { }



getRanking(text : string): Observable<Busca> {
 return this.httpClient.get<Busca>(this.urlDireta+text)
   .pipe(
     retry(2),
     catchError(this.handleError))
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

