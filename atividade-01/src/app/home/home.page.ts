import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  titulo = 'Douglas Santana'

  carros = [
    { nome: 'Marina Ruy Barbosa', data: '30/06/1995', foto: 'https://imgcdn.portalt5.com.br/0ZYlCyTyRs4S9RwYPd2MRo65aCY=/313x270/smart/filters:strip_icc()/s3.portalt5.com.br/imagens/MARINA-30-04.png' },
    { nome: 'Cleo Pires', data: '02/10/1982', foto: 'https://catracalivre.com.br/wp-content/uploads/2017/05/cleopires_oficial_instagram-450x301.png' },
    { nome: 'Grazi Massafera', data: '28/06/1982', foto: 'https://uploads.metropoles.com/wp-content/uploads/2018/08/28151759/Grazi-Massaferai-840x560.jpg' },
    { nome: 'Paola Oliveira', data: '14/04/1982', foto: 'https://cdn-ofuxico.akamaized.net/img/galeria/2018/09/pa_388374.jpg' },
    { nome: 'MC Mirella', data: '26/12/1996', foto: 'https://extra.globo.com/incoming/23390894-5e8-35e/w976h550-PROP/mcmirella.jpg' },
  ]

}
