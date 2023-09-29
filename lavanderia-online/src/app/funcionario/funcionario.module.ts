import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFuncionarioComponent } from './home-funcionario/home-funcionario.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeFuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule
  ]
})
export class FuncionarioModule { }
