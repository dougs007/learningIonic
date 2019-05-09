import {Component, OnInit} from '@angular/core';
import {Professor} from '../model/Professor';
import {ProfessorService} from '../professor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EnderecoService} from '../endereco.service';

@Component({
    selector: 'app-professor-form',
    templateUrl: './professor-form.page.html',
    styleUrls: ['./professor-form.page.scss'],
})

export class ProfessorFormPage implements OnInit {

    private id
    public titulo = 'Dados de Professor'
    public professor: Professor = new Professor()

    constructor(
        private professorService: ProfessorService,
        private enderecoService: EnderecoService,
        private route: Router,
        private router: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.id = this.router.snapshot.paramMap.get('id')

        if (this.id) {
            console.log(this.id);
            this.professorService.findProfessor(this.id).subscribe((data: any) => {
                console.log(data);
                this.professor = data
            })
        }

    }

    buscarCep() {
        this.enderecoService.buscarCep(this.professor.endereco.cep).subscribe((data: any) => {
            console.log(data);
            this.professor.endereco = data
        })
    }

    salvar() {
        this.professorService.salvar(this.professor, this.id);

        // Redirecionar para a rota ....
        this.route.navigateByUrl('/professor');
    }

    excluir() {
        if (this.id) {
            this.professorService.excluir(this.id);

            // Redirecionar para a rota ....
            this.route.navigateByUrl('/professor');
        }
    }

    voltar() {
        // Redirecionar para a rota ....
        this.route.navigateByUrl('/professor');
    }
}
