import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { LoginComponent } from './login/login.component';
import { AutoCadastroComponent } from './auto-cadastro/auto-cadastro.component';
import { PedidoOnlineComponent } from './pedido-online/pedido-online.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';
import { AprovarOrcamentoPedidoComponent } from "./aprovar-orcamento-pedido/aprovar-orcamento-pedido.component";
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { PagamentoComponent } from './pagamento/pagamento/pagamento.component';
import { PagamentoPixComponent } from './pagamento/pagamento-pix/pagamento-pix.component';
import { PagamentoCartaoComponent } from './pagamento/pagamento-cartao/pagamento-cartao.component';
import { ListarPedidosFuncionarioComponent } from './listar-pedidos-funcionario/listar-pedidos-funcionario.component';
import { FuncionarioHomeComponent } from './funcionario-home/funcionario-home.component';
import { RejeitarOrcamentoPedidoComponent } from './rejeitar-orcamento-pedido/rejeitar-orcamento-pedido.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeClienteComponent,
        LoginComponent,
        AutoCadastroComponent,
        PedidoOnlineComponent,
        ConsultaPedidoComponent,
        AprovarOrcamentoPedidoComponent,
        RejeitarOrcamentoPedidoComponent,
        ListarPedidosComponent,
        PagamentoComponent,
        PagamentoPixComponent,
        PagamentoCartaoComponent,
        ListarPedidosFuncionarioComponent,
        FuncionarioHomeComponent,
        RejeitarOrcamentoPedidoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
