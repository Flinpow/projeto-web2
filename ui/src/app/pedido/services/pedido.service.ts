import { Injectable } from '@angular/core';
import { Pedido } from './../../shared/models/pedido.model'


//estratégia de buscar no localStorage como visto no projeto CRUD do professor
const LS_CHAVE: string = "pedidos";

@Injectable({
    providedIn: 'root'
})
export class PedidoService {
    private pedidos: Pedido[] = [];
    private numeroPedidoAtual = 1;
  
    constructor() { }
    //TODO - Refatorar método a seguir para atender a noa estrutura de Model Pedido
  //  aprovarPedido(orcamento: Orcamento): Pedido {
  //    const novoPedido: Pedido = {
  //      numero: `PEDIDO${this.numeroPedidoAtual}`,
  //      orcamento,
  //      estado: 'EM ABERTO'
  //    };
  //    this.pedidos.push(novoPedido);
  //    this.numeroPedidoAtual++;
  //    return novoPedido;
  //  }
  
  // Implementação de CRUD conforme mostrado pelo professor no projeto de CRUD.
    listarTodos(): Pedido[] {
      const pedidos = localStorage[LS_CHAVE];
      return pedidos ? JSON.parse(pedidos) : [];
    }
  
    inserir(pedido: Pedido) {
      const pedidos = this.listarTodos();
      pedido.id = new Date().getTime();
      pedidos.push(pedido);
      localStorage[LS_CHAVE] = JSON.stringify(pedidos);
    }
  
    buscarPorId(id: number) : Pedido | undefined {
      // obtém a lista completa
      const pedidos : Pedido[] = this.listarTodos();
      // Efetua a busca
      // find() retorna o primeiro elemento que satisfaz a condição
      return pedidos.find(pedido => pedido.id === id);
    }
  
    atualiza(pedido: Pedido) {
      //Obtém a lista completa
      const pedidos: Pedido [] = this.listarTodos();
      // varre a lista de pessoas 
      // quando encontra a pessoa com o mesmo id, altera a lista
      pedidos.forEach((obj, index, objs) => {
        if(pedido.id === obj.id) {
          objs[index] = pedido;
        }
      })
      // armazena a nova lista no local storage
        localStorage[LS_CHAVE] = JSON.stringify(pedido);
    }
  
    remover(id: number) {
      let pedidos: Pedido[] = this.listarTodos();
      // filter() vai retornar todos da lista que forem 
      //diferentes do id passado para exclusão
      pedidos = pedidos.filter(pedido => pedido.id !== id);
  
      localStorage[LS_CHAVE] = JSON.stringify(pedidos);
    }
  
    recolherPedido(id:number) {
      let pedidos: Pedido[] = this.listarTodos();
      //busca o pedido a ser alterado para 'RECOLHIDO'
      let newPedido: Pedido | undefined= this.buscarPorId(id);
      if(newPedido != undefined){
        newPedido.status = "RECOLHIDO";
        this.atualiza(newPedido);
      } else
      throw new Error("Pessoa não encontrada: id = " + id);
    }
  }