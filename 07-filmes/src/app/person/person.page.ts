import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {

  public person_name
  public actors
  public profile

  constructor(
    private router: ActivatedRoute,
    private pessoaService: PessoaService,
  ) { }

  ngOnInit() {

    let id = this.router.snapshot.paramMap.get('id')

    this.pessoaService.getDetails(id).subscribe((data: any) => {
      this.actors = data

    })

  }
}
