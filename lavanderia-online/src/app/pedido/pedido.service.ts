import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidos: Pedido[] = [];
  private numeroPedidoAtual = 1;

  constructor() { }

  aprovarPedido(orcamento: Orcamento): Pedido {
    const novoPedido: Pedido = {
      numero: `PEDIDO${this.numeroPedidoAtual}`,
      orcamento,
      estado: 'EM ABERTO'
    };
    this.pedidos.push(novoPedido);
    this.numeroPedidoAtual++;
    return novoPedido;
  }

//  buscarPedidoPorId(id: string) : Pedido {
    //implementar lógica  de negócio quando o sistema estiver com backend
 // }
}



export interface Orcamento {
  valor: number;
  prazo: string;
}

export interface Pedido {
  numero: string;
  orcamento?: Orcamento;
  estado: string;
}