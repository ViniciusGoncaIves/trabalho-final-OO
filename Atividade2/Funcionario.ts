export abstract class Funcionario {
 /* 
  estes sao os atributos que todo funcionario vai ter
  no caso dessa questao na atividade pedia para criar salario com double, porem nao deu certo
  entao coloquei como number mesmo 
   */
    private nome: String;
    private salario: number;
    private identificao: String;

 /* 
    Funcionario vai ser uma classe pai abstrata, sendo assim, todos que herdam dela
    vao ter que implementar o metodo calcularSalario da sua maneira especifica
*/

    constructor(nome: String, salario: number, identificao: String){
        this.nome = nome;
        this.salario = salario;
        this.identificao = identificao;
    }

    abstract calcularSalario(): number;
}

