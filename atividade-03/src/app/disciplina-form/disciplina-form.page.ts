import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Disciplina } from '../model/Disciplina';
import { CursoService } from '../curso.service';

@Component({
    selector: 'app-disciplina-form',
    templateUrl: './disciplina-form.page.html',
    styleUrls: ['./disciplina-form.page.scss'],
})

export class DisciplinaFormPage implements OnInit {

    private id
    public titulo = 'Dados de Disciplina'
    public disciplina: Disciplina = new Disciplina()
    public cursos

    constructor(
        private cursoService: CursoService,
        private disciplinaService: DisciplinaService,
        private route: Router,
        private router: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.id = this.router.snapshot.paramMap.get('id')

        if (this.id) {
            this.disciplinaService.findDisciplina(this.id).subscribe((data: any) => {
                this.disciplina = data
            })
        }

        this.cursoService.all().subscribe((data: any) => {
            this.cursos = data
        })

    }

    salvar() {
        this.disciplinaService.salvar(this.disciplina, this.id);

        // Redirecionar para a rota ....
        this.route.navigateByUrl('/disciplina');
    }

    excluir() {
        if (this.id) {
            this.disciplinaService.excluir(this.id);

            // Redirecionar para a rota ....
            this.route.navigateByUrl('/disciplina');
        }
    }

    voltar() {
        // Redirecionar para a rota ....
        this.route.navigateByUrl('/disciplina');
    }

}
