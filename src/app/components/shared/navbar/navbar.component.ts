import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../servicios/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  modalRef: BsModalRef;
  createReposteiras : FormGroup;
  constructor( public auth: AuthService, private router: Router ,  private modalService: BsModalService, private fb: FormBuilder ) {
    auth.handleAuthentication();
  }


  ngOnInit(){
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

  login() {
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }

  respoterias(city){
    this.router.navigate( ['/reposterias', city] );
  }
  createReposteria(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' }));
  }
  

}
