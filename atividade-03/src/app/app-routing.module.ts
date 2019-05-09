import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'aluno', loadChildren: './aluno/aluno.module#AlunoPageModule' },
  { path: 'formulario/:id', loadChildren: './formulario/formulario.module#FormularioPageModule' },
  { path: 'formulario', loadChildren: './formulario/formulario.module#FormularioPageModule' },
  { path: 'curso', loadChildren: './curso/curso.module#CursoPageModule' },
  { path: 'curso-form', loadChildren: './curso-form/curso-form.module#CursoFormPageModule' },
  { path: 'curso-form/:id', loadChildren: './curso-form/curso-form.module#CursoFormPageModule' },
  { path: 'disciplina', loadChildren: './disciplina/disciplina.module#DisciplinaPageModule' },
  { path: 'disciplina-form', loadChildren: './disciplina-form/disciplina-form.module#DisciplinaFormPageModule' },
  { path: 'disciplina-form/:id', loadChildren: './disciplina-form/disciplina-form.module#DisciplinaFormPageModule' },
  { path: 'professor', loadChildren: './professor/professor.module#ProfessorPageModule' },
  { path: 'professor-form', loadChildren: './professor-form/professor-form.module#ProfessorFormPageModule' },
  { path: 'professor-form/:id', loadChildren: './professor-form/professor-form.module#ProfessorFormPageModule' },
  { path: 'turma', loadChildren: './turma/turma.module#TurmaPageModule' },
  { path: 'turma-form', loadChildren: './turma-form/turma-form.module#TurmaFormPageModule' },
  { path: 'turma-form/:id', loadChildren: './turma-form/turma-form.module#TurmaFormPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
