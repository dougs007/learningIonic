import {Component, OnInit} from '@angular/core';
import {TurmaService} from '../turma.service';

@Component({
    selector: 'app-turma',
    templateUrl: './turma.page.html',
    styleUrls: ['./turma.page.scss'],
})

export class TurmaPage implements OnInit {

    public turma = []
    public titulo = 'Lista de Turmas'

    constructor(
        private turmaService: TurmaService
    ) {
    }

    ngOnInit() {
        this.turmaService.all().subscribe((data: any) => {
            this.turma = data
        })
    }

}
