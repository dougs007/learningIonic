import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  news = {}
  tittle = 'Notícias'
  constructor(
    private noticiaService: NoticiaService
  ) { }

  ngOnInit() {
    this.noticiaService.all().subscribe((data: any) => {
      this.news = data.news;
    });
  }

}
