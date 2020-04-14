import { Funcionario } from "./funcionario";

export interface RespostaFuncionario {
    hasNext: boolean;
    items: Funcionario[];
}