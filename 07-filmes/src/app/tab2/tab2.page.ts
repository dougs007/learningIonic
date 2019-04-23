import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public titulo = 'Top Rated Movies';
  public rated = []

  constructor(
    private router: ActivatedRoute,
    private filmeService: FilmesService,
  ) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    this.filmeService.getTopRated().subscribe((data: any) => {
      console.log('top rated')
      console.log(data.results)
      this.rated = data.results
    })
  }

}
