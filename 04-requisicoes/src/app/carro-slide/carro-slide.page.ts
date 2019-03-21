import { CarroService } from './../carro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-slide',
  templateUrl: './carro-slide.page.html',
  styleUrls: ['./carro-slide.page.scss'],
})
export class CarroSlidePage implements OnInit {

  carros 

  constructor(private CarroService: CarroService) {
    this.carros = this.CarroService.all();
   }

  ngOnInit() {
  }

}
