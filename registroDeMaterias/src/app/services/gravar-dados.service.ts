import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GravarDadosService {
  contador = 0;
  users: Array<User> = [];
  constructor() {}
  gravarUsuarioNoLocalStorage(contato: User) {
    this.users.push(contato);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
interface User {
  email: string;
  password: string;
}
