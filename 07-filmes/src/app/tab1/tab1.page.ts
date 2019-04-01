import { FilmesService } from './../filmes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public filmes = []
  public title = 'The Movies'

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit() {

    this.filmesService.getPopular().subscribe((data: any) => {
      this.filmes = (data.results)
    })

  }

}
