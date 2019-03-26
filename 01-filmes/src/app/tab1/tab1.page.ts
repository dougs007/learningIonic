import { Component } from '@angular/core';
import { FilmeService } from '../filme.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  name = 'Filmes Populares'
  moovies = {}
  constructor(
    private moovieService: FilmeService
  ) {

  }

  ngOnInit() {
    this.moovieService.getPopularMoovie().subscribe((data: any) => {
      console.log(data);
      this.moovies = data.results;
    });

  }
}

