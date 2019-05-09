import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CursoService} from '../curso.service';
import {Aluno} from "../model/Aluno";
import {Curso} from "../model/Curso";

@Component({
    selector: 'app-curso-form',
    templateUrl: './curso-form.page.html',
    styleUrls: ['./curso-form.page.scss'],
})

export class CursoFormPage implements OnInit {

    private id
    public titulo = 'Dados de Curso'
    public curso: Curso = new Curso()

    constructor(
        private cursoService: CursoService,
        private route: Router,
        private router: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.id = this.router.snapshot.paramMap.get('id')

        if (this.id) {
            this.cursoService.findCurso(this.id).subscribe((data: any) => {
                this.curso = data
            })
        }

    }

    salvar() {
        this.cursoService.salvar(this.curso, this.id);

        // Redirecionar para a rota ....
        this.route.navigateByUrl('/curso');
    }

    excluir() {
        if (this.id) {
            this.cursoService.excluir(this.id);

            // Redirecionar para a rota ....
            this.route.navigateByUrl('/curso');
        }
    }

    voltar() {
        // Redirecionar para a rota ....
        this.route.navigateByUrl('/curso');
    }

}
