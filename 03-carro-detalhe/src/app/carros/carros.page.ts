import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.page.html',
  styleUrls: ['./carros.page.scss'],
})
export class CarrosPage implements OnInit {

  titulo = 'Carros'

  carros
  constructor(private carrosService: CarroService) {
    this.carros = this.carrosService.all();
  }

  ngOnInit() {
  }

}
