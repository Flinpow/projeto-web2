import { PedidoOnlineComponent } from './pedido-online/pedido-online.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClienteComponent } from "./home-cliente/home-cliente.component";
import { LoginComponent } from "./login/login.component";
import { AutoCadastroComponent } from "./auto-cadastro/auto-cadastro.component";
import { AprovarPedidoComponent } from "./aprovar-orcamento-pedido/aprovar-orcamento-pedido.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: AutoCadastroComponent },
  { path: 'home', component: HomeClienteComponent },
  { path: 'pedido', component: PedidoOnlineComponent }
  { path: 'pedido', component: AprovarPedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
