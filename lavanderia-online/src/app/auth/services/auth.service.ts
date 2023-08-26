import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';

const LS_CHAVE: string = "usuarios";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  listarTodos(): Usuario[] {
    const usuarios = localStorage[LS_CHAVE];
    return usuarios ? JSON.parse(usuarios) : [];
  }


  cadastrar(usuario: Usuario): void {
    const usuarios = this.listarTodos();
    usuario.id = new Date().getTime();

    usuarios.push(usuario);
    localStorage[LS_CHAVE] = JSON.stringify(usuarios);
  }

  logar(email?: string, senha?: string): boolean {
    const usuarios = this.listarTodos();
    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    if (usuario) {
      localStorage[LS_CHAVE] = JSON.stringify(usuario);
      return true;
    }
    return false;
  }
}
