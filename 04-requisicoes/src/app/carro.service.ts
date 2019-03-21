import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor() { }

  all() {
    return [
      { nome: 'Aventador SV', marca: 'Lamborghini', ano: 2018, cor: 'Orange fire', foto: 'http://gtspirit.com/wp-content/uploads/2015/07/Lamborghini-Aventador-SV-for-sale.jpg' },
      { nome: '488 Pista spyder', marca: 'Ferrari', ano: 2019, cor: 'White Polarized', foto: 'https://cdn.motor1.com/images/mgl/WwKXj/s1/ferrari-488-pista-spider.jpg' },
      { nome: '812 Superfast', marca: 'Ferrari', ano: 2018, cor: 'Red', foto: 'https://hips.hearstapps.com/hmg-prod/images/2018-ferrari-812superfast-newlead-1544463857.jpg' },
      { nome: 'Gt2 RS', marca: 'Porsche', ano: 2018, cor: 'Ocean Blue', foto: 'https://i.wheelsage.org/pictures/p/porsche/911_gt2_rs/porsche_911_gt2_rs_686.jpeg' },
      { nome: '720s', marca: 'McLaren', ano: 2018, cor: 'Red Vulcano', foto: 'https://i.ytimg.com/vi/nO4mLNpcY1o/maxresdefault.jpg' },
      { nome: 'Gtr r35', marca: 'Nissan', ano: 2016, cor: 'White', foto: 'http://s1.1zoom.me/big0/877/Nissan_GT-R_Nismo_475147.jpg' },
      { nome: '911 turbo S', marca: 'Porsche', ano: 2016, cor: 'Yellow Race', foto: 'http://s2.glbimg.com/QtFVYfPqqZfz_vuLixbtJIlnrlQ=/s.glbimg.com/jo/g1/f/original/2013/11/18/porsche-911_turbo_2014_1600x1200_wallpaper_01.jpg' },
      { nome: '600LT', marca: 'McLaren', ano: 2018, cor: 'Gray', foto: 'https://cars.mclaren.com/files/live/sites/mclaren/files/cars-mclaren-com-Main/McLaren%20Model%20Section/600LT/600LT%20model%20header.jpg?t=w1440' },
      { nome: 'F8 tributo', marca: 'Ferrari', ano: 2019, cor: 'Red', foto: 'https://m.atcdn.co.uk/ect/media/w900/71bbd91f0a1d4d0e99165ea98a4aba16.jpg' },
      { nome: 'Sesto Elemento', marca: 'Lamborghini', ano: 2016, cor: 'Carbon', foto: 'https://car-images.bauersecure.com/upload/24142/images/00008edcf8b5-0d8a-44df-a.jpg' }
    ];

  }

  get(id) {
    let carros = this.all();
    return carros[id];
  }

}
