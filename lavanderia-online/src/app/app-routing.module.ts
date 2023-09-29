import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeFuncionarioComponent } from './funcionario/home-funcionario/home-funcionario.component';
import { HomeClienteComponent } from './cliente/home-cliente/home-cliente.component';

import { HomePagamentoComponent } from './pagamento/home-pagamento/home-pagamento.component';
import { PixComponent } from './pagamento/pix/pix.component';
import { CartaoComponent } from './pagamento/cartao/cartao.component';
import { CriarPedidoComponent } from './pedido/criar-pedido/criar-pedido.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: RegisterComponent },
  { path: 'home-funcionario', component: HomeFuncionarioComponent },
  { path: 'home-cliente', component: HomeClienteComponent },
  { path: 'pagamento', component: HomePagamentoComponent },
  { path: 'pix', component: PixComponent },
  { path: 'cartao', component: CartaoComponent },
  {path: 'pedido', component: CriarPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
