import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { RouterModule } from '@angular/router';
import { CartaoComponent } from '../pagamento/cartao/cartao.component';
import { PixComponent } from '../pagamento/pix/pix.component';
import { HomePagamentoComponent } from '../pagamento/home-pagamento/home-pagamento.component';



@NgModule({
  declarations: [
    HomeClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'pagamento', component: HomePagamentoComponent },
      { path: 'cartao', component: CartaoComponent },
      { path: 'pix', component: PixComponent }])
  ]
})
export class ClienteModule { }
