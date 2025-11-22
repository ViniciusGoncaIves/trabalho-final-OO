import { Funcionario } from "./Funcionario";
export class Desenvolvedor extends Funcionario{

    // nesse caso o salario do desenvolvedor vai ter um acrescimo de 10%
    // do valor que vier no constrctor
    calcularSalario(): number {
        return this.salario * 1.10;
    }
}