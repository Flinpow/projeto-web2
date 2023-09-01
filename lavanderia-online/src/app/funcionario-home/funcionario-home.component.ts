import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedidos/service/pedido.service';

@Component({
  selector: 'app-funcionario-home',
  templateUrl: './funcionario-home.component.html',
  styleUrls: ['./funcionario-home.component.css']
})
export class FuncionarioHomeComponent implements OnInit {

  constructor(private pedidoService: PedidoService) {}
  ngOnInit(): void {

  }

  recolherPedido(id: number) {
    this.pedidoService.recolherPedido(id);
  }

}
