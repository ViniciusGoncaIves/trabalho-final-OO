import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario{

    // ! nesse caso o salario do gerente vai ter um acrescimo de 20%
    // ! do valor que vier no constrctor
    calcularSalario(): number {
        return this.salario * 1.20;
    }
}
