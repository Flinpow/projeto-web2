import { Component, OnInit } from '@angular/core';
import { PedidoService, Pedido, Orcamento } from '../pedido/services/pedido.service';



@Component({
  selector: 'app-aprovar-pedido',
  templateUrl: './aprovar-orcamento-pedido.component.html',
  styleUrls: ['./aprovar-orcamento-pedido.component.css']
})
export class AprovarOrcamentoPedidoComponent implements OnInit {
  orcamento: Orcamento = { valor: 0, prazo: '' };
  pedidoAprovado = false;
  numeroPedido: string | null = null;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  aprovarPedido(): void {
    const novoPedido = this.pedidoService.aprovarPedido(this.orcamento);
    this.pedidoAprovado = true;
    this.numeroPedido = novoPedido.numero;
  }
}

