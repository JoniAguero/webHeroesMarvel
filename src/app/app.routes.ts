import { RouterModule, Routes }   from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {BuscarHeroeComponent} from './components/buscar-heroe/buscar-heroe.component';
import {AboutComponent} from './components/about/about.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'heroes/:nombre', component: BuscarHeroeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
