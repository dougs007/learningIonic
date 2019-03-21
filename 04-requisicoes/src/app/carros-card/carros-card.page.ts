import { CarroService } from './../carro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-card',
  templateUrl: './carros-card.page.html',
  styleUrls: ['./carros-card.page.scss'],
})
export class CarrosCardPage implements OnInit {

  carros

    constructor(private CarroService: CarroService) {
    this.carros = this.CarroService.all();
   }

  ngOnInit() {
  }

}
