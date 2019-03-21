import { CarroService } from './../carro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.page.html',
  styleUrls: ['./carros.page.scss'],
})
export class CarrosPage implements OnInit {

  carros 

    constructor(private CarroService: CarroService) {
    this.carros = this.CarroService.all();
   }

  ngOnInit() {
  }

}
