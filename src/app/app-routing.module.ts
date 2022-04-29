import { HeaderComponent } from './header/header.component';
import { PartidaComponent } from './partida/partida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { FilmeComponent } from './filme/filme.component';

const routes: Routes = [
  { path: 'rankings', component: RankingComponent},
  { path: 'partidas', component: PartidaComponent },
  { path: 'filmes/:text', component: FilmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
