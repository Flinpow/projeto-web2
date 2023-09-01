import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedidos/service/pedido.service';

@Component({
  selector: 'app-listar-pedidos-funcionario',
  templateUrl: './listar-pedidos-funcionario.component.html',
  styleUrls: ['./listar-pedidos-funcionario.component.css']
})
export class ListarPedidosFuncionarioComponent implements OnInit{
 constructor(private pedidoService: PedidoService) {}
  ngOnInit(): void {
  }

  recolherPedido(id : number) {
    this.pedidoService.recolherPedido(id);
  }
}
