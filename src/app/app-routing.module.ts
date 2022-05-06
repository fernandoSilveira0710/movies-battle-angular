import { HomeComponent } from './conteudo/home/home.component';
import { LoginComponent } from './conteudo/login/login.component';
import { HeaderComponent } from './header/header.component';
import { PartidaComponent } from './conteudo/partida/partida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './conteudo/ranking/ranking.component';
import { FilmeComponent } from './conteudo/filme/filme.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rankings', component: RankingComponent},
  { path: 'partidas', component: PartidaComponent },
  { path: 'filmes/:text', component: FilmeComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
