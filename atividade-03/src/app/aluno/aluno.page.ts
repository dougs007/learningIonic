import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})

export class AlunoPage implements OnInit {

  public alunos = []

  constructor(
    private alunoService: AlunoService
  ) { }

  ngOnInit() {
    this.alunoService.all().subscribe((data: any) => {
      this.alunos = data
    })
  }

}
