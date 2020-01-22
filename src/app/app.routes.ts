
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TortasComponent } from './components/tortas/tortas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MisPostresComponent } from './mis-postres/mis-postres.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reposterias/:city', component: HeroesComponent },
  { path: 'tortas', component: TortasComponent },
  { path: 'tortas/:categoria', component: TortasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'mispostres', component: MisPostresComponent },
  { path: 'reposteria/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
