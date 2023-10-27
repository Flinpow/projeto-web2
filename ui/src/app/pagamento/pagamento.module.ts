import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoCartaoComponent } from './pagamento-cartao/pagamento-cartao.component';
import { PagamentoHomeComponent } from './pagamento-home/pagamento-home.component';
import { PagamentoPixComponent } from './pagamento-pix/pagamento-pix.component';



@NgModule({
    declarations: [
        PagamentoCartaoComponent,
        PagamentoHomeComponent,
        PagamentoPixComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PagamentoModule { }
