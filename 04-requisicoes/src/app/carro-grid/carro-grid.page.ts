import { CarroService } from './../carro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-grid',
  templateUrl: './carro-grid.page.html',
  styleUrls: ['./carro-grid.page.scss'],
})
export class CarroGridPage implements OnInit {

  carros 

    constructor(private CarroService: CarroService) {
    this.carros = this.CarroService.all();
   }

  ngOnInit() {
  }

}
