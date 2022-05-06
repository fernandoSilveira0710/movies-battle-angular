import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {

  ngOnChanges() {
    console.log('ngOnChanges appcomp' );
  }

  constructor(router: Router, serviceLogin: LoginService) {
    serviceLogin.verificaUserLogado();

    console.log('constructor appcomp');
  }


}

