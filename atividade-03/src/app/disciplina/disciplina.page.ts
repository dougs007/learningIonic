import {Component, OnInit} from '@angular/core';
import {DisciplinaService} from '../disciplina.service';

@Component({
    selector: 'app-disciplina',
    templateUrl: './disciplina.page.html',
    styleUrls: ['./disciplina.page.scss'],
})

export class DisciplinaPage implements OnInit {

    public disciplinas = []
    public titulo = 'Lista de Disciplinas'

    constructor(
        private disciplinaService: DisciplinaService
    ) {
    }

    ngOnInit() {
        this.disciplinaService.all().subscribe((data: any) => {
            console.log(data);
            this.disciplinas = data
        })
    }
}
