import { Funcionario } from "./Funcionario";
import { Estagiario } from "./Estagiario";
import { Desenvolvedor } from "./Desenvolvedor";
import { Gerente } from "./Gerente";

// ! Foi criada uma lista do tipo Funcionario que é a classe abstrata
// ! dessa forma vou conseguir adicionar qualquer tipo de funcionario nela
// ! Gerente, Desenvolvedor, Estagiario, etc

const funcionarios: Funcionario[] = [];

// ! Adicionando 4 gerentes
// ! onde a classe Gerente tem um acrescimo de 20% no salario
// ! conforme foi obrigada a implementar na classe Gerente por conta da classe abstrata Funcionario
funcionarios.push(new Gerente("Alcides", 8000, "1234567890"));
funcionarios.push(new Gerente("Arlindo", 9000, "0987654321"));
funcionarios.push(new Gerente("Altemir", 8500, "1122334455"));
funcionarios.push(new Gerente("Anésio", 9500, "5566778899"));

// ! Adicionando 4 desenvolvedores
// ! onde a classe Desenvolvedor tem um acrescimo de 10% no salario
// ! conforme foi obrigada a implementar na classe Desenvolvedor por conta da classe abstrata Funcionario
funcionarios.push(new Desenvolvedor("Valdomiro", 6000, "2233445566"));
funcionarios.push(new Desenvolvedor("Claudiomiro", 6200, "3344556677"));
funcionarios.push(new Desenvolvedor("Ramiro", 5800, "4455667788"));
funcionarios.push(new Desenvolvedor("Alcemiro", 6100, "6677889900"));

// ! Adicionando 4 estagiarios
// ! onde a classe Estagiario vai receber o salario fixo
// ! conforme foi obrigada a implementar na classe Gerente por conta da classe abstrata Funcionario
funcionarios.push(new Estagiario("Enzo", 1500, "7788990011"));
funcionarios.push(new Estagiario("Theo", 1600, "8899001122"));
funcionarios.push(new Estagiario("Gael", 1400, "9900112233"));
funcionarios.push(new Estagiario("Ravi", 1550, "1011121314"));


// ! Exibindo os dados de cada funcionario na lista
// ! para isso é feito esse loop que percorre cada funcionario na lista
// ! e exibe o cargo (nome da classe), nome e salario calculado
console.log("\n---------------------------")
funcionarios.forEach(funcionario => {
    console.log(`Cargo: ${funcionario.constructor.name}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário: R$ ${funcionario.calcularSalario().toFixed(2)}`);
    console.log('---------------------------');
});

