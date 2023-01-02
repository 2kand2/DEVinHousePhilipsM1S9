import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GravarDadosService } from 'src/app/services/gravar-dados.service';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  emailInput = '';
  password = '';

  constructor(private formService: GravarDadosService) {}

  ngOnInit(): void {}

  onSubmit(myForm: NgForm) {
    let userform = {
      email: myForm.value.emailInput,
      password: myForm.value.password,
    };

    this.formService.gravarUsuarioNoLocalStorage(userform);
  }
}
