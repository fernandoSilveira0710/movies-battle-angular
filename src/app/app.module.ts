import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PartidaComponent } from './conteudo/partida/partida.component';
import { RankingComponent } from './conteudo/ranking/ranking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FilmeComponent } from './conteudo/filme/filme.component';
import { HeaderComponent } from './header/header.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { FooterComponent } from './footer/footer.component';
import localePt from '@angular/common/locales/pt';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './conteudo/home/home.component';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    PartidaComponent,
    RankingComponent,
    FilmeComponent,
    HeaderComponent,
    ConteudoComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide:DEFAULT_CURRENCY_CODE,
      useValue:'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
