import { Injectable } from '@angular/core';
// precisa vincular a criação dos models
//import { Pedido } from '../pedido.service';

//estratégia de buscar no localStorage como visto no projeto CRUD do professor
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

  rejeitarPedido(orcamento: Orcamento): Pedido {
    const novoPedido: Pedido = {
      numero: `PEDIDO${this.numeroPedidoAtual}`,
      orcamento,
      estado: 'Rejeitado'
    };
    this.pedidos.push(novoPedido);
    this.numeroPedidoAtual++;
    return novoPedido;
  }
// Implementação de CRUD conforme mostrado pelo professor no projeto de CRUD.
  listarTodos(): Pedido[] {
    const pedidos = localStorage[LS_CHAVE];
    return pedidos ? JSON.parse(pedidos) : [];
  }

  inserir(pedido: Pedido) {
    const pedidos = this.listarTodos();
    pedido.numero = new Date().getTime().toString();
    pedidos.push(pedido);
    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }

  buscarPorId(numero: string) : Pedido | undefined {
    // obtém a lista completa
    const pedidos : Pedido[] = this.listarTodos();
    // Efetua a busca
    // find() retorna o primeiro elemento que satisfaz a condição
    return pedidos.find(pedido => pedido.numero === numero);
  }

  atualiza(pedido: Pedido) {
    //Obtém a lista completa
    const pedidos: Pedido [] = this.listarTodos();
    // varre a lista de pessoas
    // quando encontra a pessoa com o mesmo id, altera a lista
    pedidos.forEach((obj, index, objs) => {
      if(pedido.numero === obj.numero) {
        objs[index] = pedido;
      }
    })
    // armazena a nova lista no local storage
      localStorage[LS_CHAVE] = JSON.stringify(pedido);
  }

  remover(numero: string) {
    let pedidos: Pedido[] = this.listarTodos();
    // filter() vai retornar todos da lista que forem
    //diferentes do id passado para exclusão
    pedidos = pedidos.filter(pessoa => pessoa.numero !== numero);

    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
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
