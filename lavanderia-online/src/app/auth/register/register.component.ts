import { AuthService } from './../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('formUser') formUser!: NgForm;
  usuario!: Usuario;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  cadastrar(): void {
    if (this.formUser.form.valid) {
      this.authService.cadastrar(this.usuario);
      this.router.navigate(['/login']);
    }
  }
}
