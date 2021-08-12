import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    ListaComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgendaModule { }
