import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.page.html',
  styleUrls: ['./carros.page.scss'],
})
export class CarrosPage implements OnInit {

  titulo = 'Carros'

  carros = [
    { nome: 'Lomborghini' },
    { nome: 'Mustang' },
    { nome: 'Fiat 147' },
    { nome: 'Fusca' },
    { nome: 'Kombão' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
