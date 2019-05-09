import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DisciplinaFormPage } from './disciplina-form.page';

const routes: Routes = [
  {
    path: '',
    component: DisciplinaFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DisciplinaFormPage]
})
export class DisciplinaFormPageModule {}
