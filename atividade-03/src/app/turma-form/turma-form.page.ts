import { Component, OnInit } from '@angular/core';
import { Turma } from '../model/Turma';
import { TurmaService } from '../turma.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.page.html',
  styleUrls: ['./turma-form.page.scss'],
})

export class TurmaFormPage implements OnInit {

  private id
  public titulo = 'Dados de turma'
  public turma: Turma = new Turma()

  constructor(
      private turmaService: TurmaService,
      private route: Router,
      private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
      this.id = this.router.snapshot.paramMap.get('id')

      if (this.id) {
          this.turmaService.findTurma(this.id).subscribe((data: any) => {
              this.turma = data
          })
      }

  }

  salvar() {
      this.turmaService.salvar(this.turma, this.id);

      // Redirecionar para a rota ....
      this.route.navigateByUrl('/turma');
  }

  excluir() {
      if (this.id) {
          this.turmaService.excluir(this.id);

          // Redirecionar para a rota ....
          this.route.navigateByUrl('/turma');
      }
  }

  voltar() {
      // Redirecionar para a rota ....
      this.route.navigateByUrl('/turma');
  }
}
