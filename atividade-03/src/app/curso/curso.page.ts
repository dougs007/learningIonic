import {Component, OnInit} from '@angular/core';
import {CursoService} from '../curso.service';

@Component({
    selector: 'app-curso',
    templateUrl: './curso.page.html',
    styleUrls: ['./curso.page.scss'],
})

export class CursoPage implements OnInit {

    public cursos = []
    public titulo = 'Lista de Cursos'

    constructor(
        private cursoService: CursoService
    ) { }

    ngOnInit() {
        this.cursoService.all().subscribe((data: any) => {
            console.log(data);
            this.cursos = data
        })
    }
}
