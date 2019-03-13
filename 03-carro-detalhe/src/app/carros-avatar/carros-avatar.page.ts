import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carros-avatar',
  templateUrl: './carros-avatar.page.html',
  styleUrls: ['./carros-avatar.page.scss'],
})
export class CarrosAvatarPage implements OnInit {

  titulo = 'Carros'

  carros
  constructor(private carrosService: CarroService) {
    this.carros = this.carrosService.all();
  }

  ngOnInit() {
  }

}
