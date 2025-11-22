import { Funcionario } from "./Funcionario";
import { Estagiario } from "./Estagiario";
import { Desenvolvedor } from "./Desenvolvedor";
import { Gerente } from "./Gerente";

const funcionarios: Funcionario[] = [];

funcionarios.push(new Gerente("Alcides", 8000, "1234567890"));
funcionarios.push(new Gerente("Arlindo", 9000, "0987654321"));
funcionarios.push(new Gerente("Altemir", 8500, "1122334455"));
funcionarios.push(new Gerente("Anésio", 9500, "5566778899"));

funcionarios.push(new Desenvolvedor("Valdomiro", 6000, "2233445566"));
funcionarios.push(new Desenvolvedor("Claudiomiro", 6200, "3344556677"));
funcionarios.push(new Desenvolvedor("Ramiro", 5800, "4455667788"));
funcionarios.push(new Desenvolvedor("Alcemiro", 6100, "6677889900"));

funcionarios.push(new Estagiario("Enzo", 1500, "7788990011"));
funcionarios.push(new Estagiario("Theo", 1600, "8899001122"));
funcionarios.push(new Estagiario("Gael", 1400, "9900112233"));
funcionarios.push(new Estagiario("Ravi", 1550, "1011121314"));

console.log("\n---------------------------")
funcionarios.forEach(funcionario => {
    console.log(`Cargo: ${funcionario.constructor.name}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário: R$ ${funcionario.calcularSalario().toFixed(2)}`);
    console.log('---------------------------');
});

