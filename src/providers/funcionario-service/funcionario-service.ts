import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespostaFuncionario } from '../../modelos/resposta-funcionario';
import { Funcionario } from '../../modelos/funcionario';

const API_URL = 'http://localhost:8080/api/f1'

@Injectable()
export class FuncionarioServiceProvider {

  constructor(public http: HttpClient) { }

  obterFuncionarios() {
    return this.http.get<RespostaFuncionario>(API_URL);
  }

  obterCargos() {
    return this.http.get<string[]>(API_URL + '/cargos');
  }

  cadastrarFuncionario(funcionario: Funcionario) {
    return this.http.post(API_URL, funcionario);
  }

}
