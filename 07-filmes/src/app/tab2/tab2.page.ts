import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'Lista de filmes';

  filmes = [
    {nome:'Transformes', genero:'Ação', foto:'https://i.ytimg.com/vi/qKlJFIx_NYI/maxresdefault.jpg'},
    {nome:'Eu sou a lenda', genero:'ficção', foto:'https://upload.wikimedia.org/wikipedia/pt/thumb/d/df/I_am_legend_teaser.jpg/250px-I_am_legend_teaser.jpg'},
    {nome:'Matrix', genero:'Aventura', foto:'https://cinepop.com.br/wp-content/uploads/2017/03/matrix-750x380.jpg'},
    {nome:'Vingadores', genero:'Super Herói', foto:'https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_t9g6KrhYeu73foLMzN5XsxDUGPOlZCjHREbivdAp_T.jpg.jpeg'}
  ];

}
