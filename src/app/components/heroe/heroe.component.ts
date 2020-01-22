import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  @Input() reposterias;
  constructor( private activatedRoute: ActivatedRoute,private _heroesService: HeroesService, private router: Router) {}

  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params.id );
      console.log(this.heroe);
  });
  }
  verTortas(index){
    this.router.navigate( ['/tortas', index] );
  }

}