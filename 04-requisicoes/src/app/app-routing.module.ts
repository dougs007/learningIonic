import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'carros', loadChildren: './carros/carros.module#CarrosPageModule' },
  { path: 'carro-avatar', loadChildren: './carro-avatar/carro-avatar.module#CarroAvatarPageModule' },
  { path: 'carro-slide', loadChildren: './carro-slide/carro-slide.module#CarroSlidePageModule' },
  { path: 'carros-card', loadChildren: './carros-card/carros-card.module#CarrosCardPageModule' },
  { path: 'carro-grid', loadChildren: './carro-grid/carro-grid.module#CarroGridPageModule' },
  { path: 'detalhe/:id', loadChildren: './detalhe/detalhe.module#DetalhePageModule' },
  { path: 'endereco', loadChildren: './endereco/endereco.module#EnderecoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
