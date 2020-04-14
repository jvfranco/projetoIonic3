import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Funcionario } from '../../modelos/funcionario';
import { FuncionarioServiceProvider } from '../../providers/funcionario-service/funcionario-service';
import { RespostaFuncionario } from '../../modelos/resposta-funcionario';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private funcionarios: Funcionario[] = [];

  constructor(
    public navCtrl: NavController,
    private service: FuncionarioServiceProvider) {
    this.obterFuncionarios();

  }

  public obterFuncionarios() {
    this.service.obterFuncionarios()
      .subscribe((resp: RespostaFuncionario) => {
        this.funcionarios = resp.items;
      },
        (err) => console.log(err));
  }

  public avancaPaginaCadastro() {
    this.navCtrl.push(CadastroPage);
  }



}
