import { EnderecoService } from './../endereco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {

  cep;

  endereco = {};

  constructor(
    private enderecoService: EnderecoService
  ) { }

  ngOnInit() {
  }

  buscarCep() {
    this.enderecoService.buscarCep(this.cep).subscribe((data: any) => {
      this.endereco = data;
    });

  }
}