import { Component, OnInit, TemplateRef } from '@angular/core';
import { HeroesService } from '../servicios/heroes.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mis-postres',
  templateUrl: './mis-postres.component.html',
  styleUrls: ['./mis-postres.component.css']
})
export class MisPostresComponent implements OnInit {
  heroe;
  modalRef: any;
  createReposteiras: any;
  constructor( private _heroesService: HeroesService, private fb : FormBuilder, private modalService: BsModalService) { }

  ngOnInit() {

    this.heroe = this._heroesService.getHeroe( 0 );
    console.log(this.heroe);
    
    this.createReposteiras = this.fb.group({  // load details section
      'handling': [, Validators.required],
      'packageTypes': ['', Validators.required],
      'pieces': [],
      'commodityDescription': [],
      'dimensions': this.fb.group({
        'units': ['in'],
        'length': [, Validators.required],
        'width': [],
        'height': [],
      }),
      'weight': this.fb.group({
        value: [],
        units: ['lb']
      }),
      'CBF': [],
      'PCF': [],
      'shippingClass': [],
      'stackable': false,
      'hazmat': false,
      hazmatDetails: this.fb.group({
        'UNNumber': [],
        'class': [],
        'packingGroup': ['I'],
        'properShippingName': [],
        'qtyAndtypeOfPackaging': [],
        'emergencyNumber': [],
      })
  
    });
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' }));
  }
}
