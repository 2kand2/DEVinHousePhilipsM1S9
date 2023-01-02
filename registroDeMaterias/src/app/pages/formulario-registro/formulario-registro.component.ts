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

  personagem: Personagem = {
    nome: 'Charlie Francis Harper',
    imagem: '../../../assets/img/two-and-a-half-men-charlie-sheen-.jpg',
    nomeAtor: 'Charlie Sheen',
    descricao:
      'Charles Francis Harper é um solteiro de meia-idade que mora em uma casa de praia em Malibu. Seu estilo de vida frívolo se deve ao fato de ganhar muito dinheiro escrevendo jingles no início e depois canções infantis. Ele bebe e dorme com mulheres diferentes quase todos os dias, e então acorda na manhã seguinte pronto para fazer tudo de novo.',
  };
}

interface Personagem {
  nome: string;
  imagem: string;
  nomeAtor: string;
  descricao: string;
}
