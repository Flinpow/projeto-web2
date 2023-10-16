import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Pedido } from './../../shared/models/pedido.model'

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.css']
})
export class ConsultaPedidoComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pesquisarPedido();
  }

  pesquisa!: number;
  pedidoEncontrado: Pedido | undefined;
  pedidoNaoEncontrado: boolean = false;

  pesquisarPedido(): void {
    let pedido: Pedido | undefined = this.pedidoService.buscarPorId(this.pesquisa)
        if (pedido === null || pedido == undefined) {
          this.pedidos = [];
          this.pedidoEncontrado = undefined;
          this.pedidoNaoEncontrado = true;
        } else {
          this.pedidos = [pedido];
          this.pedidoEncontrado = pedido;
          this.pedidoNaoEncontrado = false;
        }

  }
}
