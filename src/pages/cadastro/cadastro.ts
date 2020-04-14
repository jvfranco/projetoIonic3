import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FuncionarioServiceProvider } from '../../providers/funcionario-service/funcionario-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Funcionario } from '../../modelos/funcionario';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  private cargos: string[] = [];
  private form: FormGroup;
  private funcionario: Funcionario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: FuncionarioServiceProvider,
    private formBuilder: FormBuilder) {

    this.obterCargos();

    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(70)]],
      telefone: ['', Validators.required],
      cargo: ['', Validators.required],
      salario: ['', Validators.required]
    });

  }

  obterCargos() {
    this.service.obterCargos()
      .subscribe((resp) => {
        this.cargos = resp;
      },
        (err) => console.log(err));
  }

  cadastrar() {
    this.funcionario = this.form.getRawValue() as Funcionario;
    this.service.cadastrarFuncionario(this.funcionario)
      .subscribe(
        () => this.navCtrl.setRoot(HomePage),
        (err) => console.log(err)
      )
  }

}
