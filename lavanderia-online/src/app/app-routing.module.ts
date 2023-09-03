import { PedidoOnlineComponent } from './pedido-online/pedido-online.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClienteComponent } from "./home-cliente/home-cliente.component";
import { LoginComponent } from "./login/login.component";
import { AutoCadastroComponent } from "./auto-cadastro/auto-cadastro.component";
import { AprovarOrcamentoPedidoComponent } from "./aprovar-orcamento-pedido/aprovar-orcamento-pedido.component";
import { RejeitarOrcamentoPedidoComponent } from './rejeitar-orcamento-pedido/rejeitar-orcamento-pedido.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { PagamentoComponent } from "./pagamento/pagamento/pagamento.component";
import { PagamentoPixComponent } from "./pagamento/pagamento-pix/pagamento-pix.component";
import { PagamentoCartaoComponent } from "./pagamento/pagamento-cartao/pagamento-cartao.component";
import { ListarPedidosFuncionarioComponent } from './listar-pedidos-funcionario/listar-pedidos-funcionario.component';
import { FuncionarioHomeComponent } from './funcionario-home/funcionario-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: AutoCadastroComponent },
  { path: 'home', component: HomeClienteComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'pagamento-pix', component: PagamentoPixComponent },
  { path: 'pagamento-cartao', component: PagamentoCartaoComponent },
  { path: 'aprovar-orcamento-pedido', component: AprovarOrcamentoPedidoComponent },
  { path: 'rejeitar-orcamento-pedido', component: RejeitarOrcamentoPedidoComponent },
  { path: 'pedido', component: PedidoOnlineComponent },
  { path: 'consulta-pedido', component: ConsultaPedidoComponent },
  { path: 'listar-pedidos', component: ListarPedidosComponent },
  { path: 'gestao-pedidos', component: ListarPedidosFuncionarioComponent },
  { path: 'funcionario', component: FuncionarioHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
