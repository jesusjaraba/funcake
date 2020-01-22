import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tortas',
  templateUrl: './tortas.component.html',
  styleUrls: ['./tortas.component.css']
})
export class TortasComponent implements OnInit {
tortas;
  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.tortas = this._heroesService.getTortasCategoria( params.categoria );
      console.log(this.tortas);
  });
  }

  async verTortas(producto, index){
    console.log(producto)
    const { value: email } = await Swal.fire({
      title: 'Confirmacion Orden',
      text: "Por favor llena tu email y te enviaremos una cotizacion",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ordenar',
      input: 'email',
      inputPlaceholder: 'Ingresa tu correo '
    })
    if (email) {
      Swal.fire(`En unos minutos encontraras un resumen y confirmacion de tu orden en tu correo`)
    }
    if(index === 0){
      localStorage.exist = true;
      this.router.navigate( ['/about'] );
    }
  }
}
