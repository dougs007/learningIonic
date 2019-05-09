import {Component, OnInit} from '@angular/core';
import {ProfessorService} from '../professor.service';

@Component({
    selector: 'app-professor',
    templateUrl: './professor.page.html',
    styleUrls: ['./professor.page.scss'],
})

export class ProfessorPage implements OnInit {

    public professores = []
    public titulo = 'Lista de Professores'

    constructor(
        private professorService: ProfessorService
    ) { }

    ngOnInit() {
        this.professorService.all().subscribe((data: any) => {
            this.professores = data
        })
    }


}
