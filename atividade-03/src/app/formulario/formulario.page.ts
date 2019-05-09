import { EnderecoService } from './../endereco.service';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../model/Aluno';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit {

  public aluno: Aluno = new Aluno;
  private id

  constructor(
    private enderecoService: EnderecoService,
    private alunoService: AlunoService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id')
    if (this.id) {
      this.alunoService.getUsuario(this.id).subscribe((data: any) => {
        this.aluno = data
      })
    }

  }

  buscarCep() {
    this.enderecoService.buscarCep(this.aluno.endereco.cep).subscribe((data: any) => {
      console.log(data);
      this.aluno.endereco = data
    })
  }

  salvar() {
    this.alunoService.salvar(this.aluno, this.id);

    // Redirecionar para a rota ....
    this.route.navigateByUrl('/aluno');
  }

  excluir() {
    this.alunoService.excluir(this.id);

    // Redirecionar para a rota ....
    this.route.navigateByUrl('/aluno');
  }

}
