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
  { path: 'carrosslide', loadChildren: './carrosslide/carrosslide.module#CarrosslidePageModule' },
  { path: 'carros-avatar', loadChildren: './carros-avatar/carros-avatar.module#CarrosAvatarPageModule' },
  { path: 'carros-card', loadChildren: './carros-card/carros-card.module#CarrosCardPageModule' },
  { path: 'carros-grid', loadChildren: './carros-grid/carros-grid.module#CarrosGridPageModule' },
  { path: 'carro-detalhe/:id', loadChildren: './carro-detalhe/carro-detalhe.module#CarroDetalhePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
