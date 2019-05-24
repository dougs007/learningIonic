import { Component, OnInit } from '@angular/core';
import {ProdutoService} from '../produto.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Produtos} from '../Models/Produto';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.page.html',
  styleUrls: ['./produtos-form.page.scss'],
})
export class ProdutosFormPage implements OnInit {

  public titulo = 'Cadastro de Produtos'
  private id
  public produto: Produtos = new Produtos()

  constructor(
      private produtoService: ProdutoService,
      private route: Router,
      private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id')

    if (this.id) {
      this.produtoService.find(this.id).subscribe((data: any) => {
        this.produto = data
      })
    }

  }

}
