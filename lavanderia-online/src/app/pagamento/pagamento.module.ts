import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao/cartao.component';
import { PixComponent } from './pix/pix.component';
import { HomePagamentoComponent } from './home-pagamento/home-pagamento.component';



@NgModule({
  declarations: [
    CartaoComponent,
    PixComponent,
    HomePagamentoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagamentoModule { }
