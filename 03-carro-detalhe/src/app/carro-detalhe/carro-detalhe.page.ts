import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro-detalhe',
  templateUrl: './carro-detalhe.page.html',
  styleUrls: ['./carro-detalhe.page.scss'],
})
export class CarroDetalhePage implements OnInit {

  id
  carro
  titulo = 'Detalhe'
  constructor(
    private router: ActivatedRoute,
    private carroService: CarroService,
  ) {
    this.id = this.router.snapshot.paramMap.get("id");
    this.carro = this.carroService.get(this.id);
  }

  ngOnInit() {
  }

}
