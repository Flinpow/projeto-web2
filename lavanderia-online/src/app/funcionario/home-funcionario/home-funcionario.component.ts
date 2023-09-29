import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-funcionario',
  templateUrl: './home-funcionario.component.html',
  styleUrls: ['./home-funcionario.component.css']
})
export class HomeFuncionarioComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }
  ngOnInit(): void {

  }

  recolherPedido(id: number) {
    this.pedidoService.recolherPedido(id);
  }

}
