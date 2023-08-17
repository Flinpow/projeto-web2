import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeClienteComponent} from "./home-cliente/home-cliente.component";
import {LoginComponent} from "./login/login.component";
import {AutoCadastroComponent} from "./auto-cadastro/auto-cadastro.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: AutoCadastroComponent },
  {path: 'home', component: HomeClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
