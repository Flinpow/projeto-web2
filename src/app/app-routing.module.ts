import { CriarPedidoComponent } from './pedido/criar-pedido/criar-pedido.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClienteComponent } from "./cliente/home-cliente/home-cliente.component";
import { LoginComponent } from "./auth/login/login.component";
import { AutoCadastroComponent } from "./auth/auto-cadastro/auto-cadastro.component";
import { AprovarOrcamentoPedidoComponent } from "./pedido/aprovar-orcamento-pedido/aprovar-orcamento-pedido.component";
import { ConsultaPedidoComponent } from './pedido/consulta-pedido/consulta-pedido.component';
import { ListarPedidosComponent } from './pedido/listar-pedidos/listar-pedidos.component';
import { PagamentoHomeComponent } from "./pagamento/pagamento-home/pagamento-home.component";
import { PagamentoPixComponent } from "./pagamento/pagamento-pix/pagamento-pix.component";
import { PagamentoCartaoComponent } from "./pagamento/pagamento-cartao/pagamento-cartao.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'cadastro', component: AutoCadastroComponent },
    { path: 'home', component: HomeClienteComponent },
    { path: 'pedido', component: CriarPedidoComponent },
    { path: 'pedido', component: AprovarOrcamentoPedidoComponent },
    { path: 'consulta-pedido', component: ConsultaPedidoComponent },
    { path: 'listar-pedidos', component: ListarPedidosComponent },
    { path: 'pagamento-home', component: PagamentoHomeComponent },
    { path: 'pagamento-pix', component: PagamentoPixComponent },
    { path: 'pagamento-cartao', component: PagamentoCartaoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
