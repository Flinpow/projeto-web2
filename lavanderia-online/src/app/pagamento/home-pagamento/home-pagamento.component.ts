import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-pagamento',
  templateUrl: './home-pagamento.component.html',
  styleUrls: ['./home-pagamento.component.css']
})
export class HomePagamentoComponent {
  constructor(private router: Router) { }

  pix() {
    this.router.navigate(['/pix']);
  }

  cartao() {
    this.router.navigate(['/cartao']);
  }
}
