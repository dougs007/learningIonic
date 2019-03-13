import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carros-grid',
  templateUrl: './carros-grid.page.html',
  styleUrls: ['./carros-grid.page.scss'],
})
export class CarrosGridPage implements OnInit {

  titulo = 'Carros Grid'

  carros
  constructor(private carroService: CarroService) {
    this.carros = this.carroService.all();
  }

  ngOnInit() {
  }

}
