import { Injectable } from '@angular/core';
// precisa vincular a criação dos models
//import { Pedido } from '../pedido.service';

//  INUTILIZAVEL ATENÇÃO: UTILIZAR SERVICE DECLARADA DENTRO DO MODULO DE PEDIDOS
const LS_CHAVE: string = "pedidos";
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
