import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('formUser') formUser!: NgForm;
  usuario!: Usuario;
  mostrarErro = false;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  entrar(): void {
    if (this.formUser.form.valid) {
      let logado = true;
      this.authService.logar(this.usuario.email, this.usuario.senha);
      if (logado) {
        this.router.navigate(['/login']);
      }
      this.mostrarErro = true;
    }
  }
}
