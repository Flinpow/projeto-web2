import { Component, OnInit } from '@angular/core';
import { Orcamento, PedidoService } from '../pedido/services/pedido.service';

@Component({
  selector: 'app-rejeitar-orcamento-pedido',
  templateUrl: './rejeitar-orcamento-pedido.component.html',
  styleUrls: ['./rejeitar-orcamento-pedido.component.css']
})

export class RejeitarOrcamentoPedidoComponent implements OnInit {
  orcamento: Orcamento = { valor: 0, prazo: '' };
  pedidoAprovado = false;
  numeroPedido: string | null = null;
  pedidoRejeitado: boolean | undefined;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  rejeitarPedido(): void {
    const novoPedido = this.pedidoService.rejeitarPedido(this.orcamento);
    this.pedidoRejeitado = true;

  }
}
