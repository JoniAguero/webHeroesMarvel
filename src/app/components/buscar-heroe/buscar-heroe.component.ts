import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {HeroesService, Heroe} from '../../services/heroes.service';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent{

   heroes:Heroe[] = [];
   nombre:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService)
              {
                this.activatedRoute.params.subscribe( params => {
                  this.nombre = params['nombre'];
                  this.heroes = _heroesService.buscarHeroes(params['nombre']);
                })
              }
}
