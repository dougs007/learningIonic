import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carros-card',
  templateUrl: './carros-card.page.html',
  styleUrls: ['./carros-card.page.scss'],
})
export class CarrosCardPage implements OnInit {

  titulo = 'Carros'

  carros

  constructor(private carrosService: CarroService) {
    this.carros = this.carrosService.all();
  }

  ngOnInit() {
  }

}
