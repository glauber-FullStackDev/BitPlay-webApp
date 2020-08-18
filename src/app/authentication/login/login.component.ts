import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  optionsMenu: any[] = [
    {label: 'Login', value: 'login'},
    {label: 'Cadastro', value: 'cadastro'}
  ];

  selectedOption: any = 'login';
  formLogin: FormGroup;
  formCadastro: FormGroup

  constructor(
    private fmb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fmb.group({
      email: [null, [Validators.email, Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(6)]]
    });

    this.formCadastro = this.fmb.group({
      nome: [null, [Validators.minLength(5), Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      repetirSenha: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  selectOption(value) {
    this.selectedOption = value;
  }

}
