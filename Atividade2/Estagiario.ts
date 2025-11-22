import { Funcionario } from "./Funcionario";
export class Estagiario extends Funcionario{
    // no caso do estagiario o salario e fixo, ou seja, nao tem acrescimo
    // sera o valor que vier no constructor como salario
    calcularSalario(): number {
        return this.salario;
    }
}
