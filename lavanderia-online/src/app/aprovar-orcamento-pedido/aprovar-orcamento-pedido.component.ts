import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { Orcamento } from '../pedido/pedido.service';
import { Pedido } from '../pedido/pedido.service';



@Component({
  selector: 'app-aprovar-pedido',
  templateUrl: './aprovar-pedido.component.html',
  styleUrls: ['./aprovar-pedido.component.css']
})
export class AprovarPedidoComponent implements OnInit {
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

