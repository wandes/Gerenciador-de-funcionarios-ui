import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraFuncionarioComponent } from './funcionario/cadastra-funcionario/cadastra-funcionario.component';
import { AtualizaFuncionarioComponent } from './funcionario/atualiza-funcionario/atualiza-funcionario.component';
import { ListaFuncionariosComponent } from './funcionario/lista-funcionarios/lista-funcionarios.component';


const routes: Routes = [
  {path : 'cadastraFuncionario', component : CadastraFuncionarioComponent},
  {path : 'atualizaFuncionario', component : AtualizaFuncionarioComponent},
  {path : 'listaFuncionario', component : ListaFuncionariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
