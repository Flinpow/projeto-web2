import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/services/pedido.service';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.css']
})
export class ConsultaPedidoComponent implements OnInit{
  private pedido: Array<string> = [];
 
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }
  buscarPedido(id: string) {
    this.pedido.push("Roupas: Camiseta, Calça, Blusa");
    this.pedido.push("Preços: R$20, R$30, R$25");
    this.pedido.push("Preço Total: R$75");
    this.pedido.push("Prazo do Serviço:3 dias uteis");
    this.pedido.push("Situação: EM PROCESSAMENTO");

    this.pedidos;
  }

  get pedidos(): Array<string> {
    console.log(this.pedido)
    return this.pedido;
  }
}
