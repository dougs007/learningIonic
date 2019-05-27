import { Component, OnInit } from '@angular/core';
import {ProdutoService} from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  public produtos = []
  public titulo = 'Lista de Produtos'

  constructor(
      private produtoservice: ProdutoService
  ) { }

  ngOnInit() {
    this.produtoservice.all().subscribe((data: any) => {
      this.produtos = data
    })
  }

}
