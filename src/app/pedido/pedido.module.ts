import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';
import { AprovarOrcamentoPedidoComponent } from './aprovar-orcamento-pedido/aprovar-orcamento-pedido.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { PedidoService } from './services/pedido.service';




@NgModule({
    declarations: [
        AprovarOrcamentoPedidoComponent,
        ConsultaPedidoComponent,
        CriarPedidoComponent,
        ListarPedidosComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        PedidoService
    ]
})
export class PedidoModule { }
