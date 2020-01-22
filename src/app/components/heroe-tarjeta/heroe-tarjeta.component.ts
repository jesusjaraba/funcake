import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe;
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router, config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.heroe);
    console.log(this.index);
  }

  verHeroe() {
    // console.log(  this.index );
    this.router.navigate(['/reposteria', this.index]);
    // this.heroeSeleccionado.emit( this.index );
  }

}
