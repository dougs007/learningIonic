import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarroDetalhePage } from './carro-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: CarroDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarroDetalhePage]
})
export class CarroDetalhePageModule {}
