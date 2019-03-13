import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carrosslide',
  templateUrl: './carrosslide.page.html',
  styleUrls: ['./carrosslide.page.scss'],
})
export class CarrosslidePage implements OnInit {

  titulo = 'Carros List Slide'

  carros

  constructor(private carroService: CarroService) {
    this.carros = this.carroService.all();
  }

  ngOnInit() {
  }

}
