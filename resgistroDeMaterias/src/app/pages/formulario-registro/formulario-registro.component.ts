import { Component } from '@angular/core';
@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss'],
})
export class FormularioRegistroComponent {
  constructor() {}

  titleModal = 'Formulário enviado!';
  messageModal = 'O formulário foi enviado com sucesso!';
}
