import { CarroService } from './../carro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-avatar',
  templateUrl: './carro-avatar.page.html',
  styleUrls: ['./carro-avatar.page.scss'],
})
export class CarroAvatarPage implements OnInit {

  carros

    constructor(private CarroService: CarroService) {
    this.carros = this.CarroService.all();
   }

  ngOnInit() {
  }

}
