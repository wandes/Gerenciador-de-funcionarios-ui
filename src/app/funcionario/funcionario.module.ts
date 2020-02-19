import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraFuncionarioComponent } from './cadastra-funcionario/cadastra-funcionario.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';
import { AtualizaFuncionarioComponent } from './atualiza-funcionario/atualiza-funcionario.component';



@NgModule({
  exports:  [CadastraFuncionarioComponent, ListaFuncionariosComponent, AtualizaFuncionarioComponent],
  declarations: [CadastraFuncionarioComponent, ListaFuncionariosComponent, AtualizaFuncionarioComponent],
  imports: [
    CommonModule
  ]
})
export class FuncionarioModule { }
