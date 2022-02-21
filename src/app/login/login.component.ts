import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
     nome: new FormControl(null,Validators.required),
     email: new FormControl(null,Validators.required),
     senha: new FormControl(null,Validators.required),
     cpf : new FormControl(null, Validators.required)
    });
  }

  postar() {
    if (!this.formulario.valid) {
      console.log("Formulário inválido");
      return;
    }
    console.log("Formulário válido", this.formulario.value);
  }

  limpaTudo():void{
    this.formulario.reset();
  }

}






