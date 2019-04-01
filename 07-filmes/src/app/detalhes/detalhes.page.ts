import { DetalheService } from './../detalhe.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})

export class DetalhesPage implements OnInit {

  public filme = {}
  public atores = []
  public title

  constructor(
    private router: ActivatedRoute,
    private detalheService: DetalheService,
  ) { }

  ngOnInit() {

    let id = this.router.snapshot.paramMap.get('id');

    this.detalheService.getDetails(id).subscribe((data: any) => {
      this.filme = data
    })

    this.detalheService.getActors(id).subscribe((data: any) => {
      this.atores = data.cast
      this.title = data.cast
    })

  }

}
