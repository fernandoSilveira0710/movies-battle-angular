import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, retry, throwError } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { Const } from 'src/app/utils/const';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticatedObs: Observable<boolean> = this._isAuthenticatedSubject.asObservable();


  constructor(private httpClient: HttpClient, private router: Router) {
    console.log('constructor LoginService');
  }

  getLogin(nickname: string, password: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(Const.URL_API_LOGIN + nickname + '/' + password)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  verificaUserLogado(): boolean {
    if (this.getUserLocalStorage() != null) {
      console.log('user logado');
      this._isAuthenticatedSubject.next(true);
      return true;
    }
    else {
      console.log('user não logado');
      this.router.navigate(['/login']);
      this._isAuthenticatedSubject.next(false);
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

  getUserLocalStorage(): Usuario | null {
    var obj = localStorage.getItem('user');
    console.log(obj);
    if (obj == null) {
      return null;
    }
    this._isAuthenticatedSubject.next(true);
    return JSON.parse(obj);
  }

  setUserLocalStorage(user: Usuario | null): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('user');
    this._isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }
}
