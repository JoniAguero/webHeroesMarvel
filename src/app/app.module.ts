import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS

import {app_routing} from './app.routes';

// SERVICIOS

import {HeroesService} from './services/heroes.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BuscarHeroeComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
