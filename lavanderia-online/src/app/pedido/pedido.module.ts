import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AprovarOrcamentoComponent } from './aprovar-orcamento/aprovar-orcamento.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';



@NgModule({
  declarations: [
    AprovarOrcamentoComponent,
    ConsultaPedidoComponent,
    CriarPedidoComponent,
    ListarPedidosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }
