import { CarroService } from './../carro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  carros

  id 

    constructor(
      private router:ActivatedRoute,
      private CarroService: CarroService,
    ){

      this.id = this.router.snapshot.paramMap.get('id');
      this.carros = this.CarroService.get(this.id);
    }

  ngOnInit() {
  }

  
}
