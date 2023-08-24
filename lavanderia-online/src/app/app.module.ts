import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { LoginComponent } from './login/login.component';
import { AutoCadastroComponent } from './auto-cadastro/auto-cadastro.component';
import { PedidoOnlineComponent } from './pedido-online/pedido-online.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeClienteComponent,
    LoginComponent,
    AutoCadastroComponent,
    PedidoOnlineComponent,
    ConsultaPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
