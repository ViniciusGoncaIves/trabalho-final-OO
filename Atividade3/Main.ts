import { ContaBancaria } from "./ContaBancaria";
import { CartaoCredito } from "./CartaoCredito";
import { CartaoDebito } from "./CartaoDebito";
import { BoletoBancario } from "./BoletoBancario";
import { Pix } from "./Pix";

 // ! Criação das contas bancárias (4 instâncias)
const conta1 = new ContaBancaria("0001-1", "Vinícius", 2000);
const conta2 = new ContaBancaria("0001-2", "Edivan", 1500);
const conta3 = new ContaBancaria("0001-3", "Armandinho", 500);
const conta4 = new ContaBancaria("0001-4", "Cleociano", 3000);

 // ! Criação dos meios de pagamento
const cartaoCredito1 = new CartaoCredito("1111 2222 3333 4444", "Vinícius", 3000);
const cartaoDebito1 = new CartaoDebito("5555 6666 7777 8888", "Edivan");

const boleto1 = new BoletoBancario("83650000001-0", new Date("2099-12-31"));    // ! válido
const boletoVencido = new BoletoBancario("83650000002-0", new Date("2020-01-01"));  // ! vencido

const pix1 = new Pix("nomoney@sindenero.com", "Pagamento amigo");
const pix2 = new Pix("chave-vaisaber-123", "Pagamento serviços");

 // ! ========== SIMULAÇÃO ==========

console.log("\n===== INÍCIO DA SIMULAÇÃO =====\n");

 // ! 1) Pagamento no crédito na conta1 (sucesso), pois saldo é suficiente
cartaoCredito1.processarPagamento(500, conta1);

 // ! 2) Pagamento no crédito acima do limite disponível (falha), pois limite é 3000
cartaoCredito1.processarPagamento(5000, conta1);

 // ! 3) Pagamento no débito na conta2 (sucesso), pois saldo é suficiente
cartaoDebito1.processarPagamento(400, conta2);

 // ! 4) Pagamento no débito com valor maior que o saldo (falha), pois saldo é 1100
cartaoDebito1.processarPagamento(2000, conta2);

 // ! 5) Pagamento de boleto válido na conta3, pois saldo é suficiente
boleto1.processarPagamento(300, conta3);

 // ! 6) Tentativa de pagar boleto vencido na conta3 (falha garantida)
boletoVencido.processarPagamento(100, conta3);

 // ! 7) PIX na conta4 (sucesso)
pix1.processarPagamento(800, conta4);

 // ! 8) PIX na conta4 com valor maior que saldo restante (pode falhar)
pix2.processarPagamento(5000, conta4);

 // ! 9) Crédito manual em conta3 para simular recebimento
conta3.creditar(1000, "Depósito em dinheiro");

 // ! 10) Novo PIX a partir da conta3 (agora com saldo suficiente)
pix2.processarPagamento(600, conta3);

console.log("\n===== FIM DA SIMULAÇÃO =====\n");

 // ! ========== HISTÓRICO FINAL DAS CONTAS ==========

const contas = [conta1, conta2, conta3, conta4];

for (const conta of contas) {
  console.log(`\n=== Histórico da conta ${conta.getNumero()} - Titular: ${conta.getTitular()} ===`);
  console.log(`Saldo final: R$ ${conta.getSaldo().toFixed(2)}`);
  conta.getHistorico().forEach((linha) => console.log(linha));
}
