import { ContaBancaria } from "./ContaBancaria";
import { MeioPagamento } from "./MeioPagamento";

// !  classe BoletoBancario que implementa a interface MeioPagamento
// ! onde sera obrigada a implementar os métodos getDescricao e processarPagamento
export class BoletoBancario implements MeioPagamento {
  private codigoBarras: string;
  private dataVencimento: Date;

  constructor(codigoBarras: string, dataVencimento: Date) {
    this.codigoBarras = codigoBarras;
    this.dataVencimento = dataVencimento;
  }

  // ! metodo para obter a descrição do boleto
  public getDescricao(): string {
    return `Boleto ${this.codigoBarras}`;
  }

  // ! metodo para processar o pagamento do boleto
  // ! onde verifica se o boleto esta vencido e se a conta tem saldo suficiente
  public processarPagamento(valor: number, conta: ContaBancaria): boolean {
    console.log(`\n>>> Pagamento de boleto no valor de R$ ${valor.toFixed(2)} (${this.getDescricao()})`);

    const hoje = new Date();

    // ! verifica se o valor é válido
    if (valor <= 0) {
      console.log("Valor inválido para pagamento de boleto.");
      return false;
    }

    // ! verifica se o boleto está vencido
    if (hoje > this.dataVencimento) {
      console.log("Boleto vencido. Pagamento não autorizado.");
      return false;
    }

    // ! consideramos que o boleto será pago debitando o valor da conta bancária
    const debitoOk = conta.debitar(
      valor,
      `Pagamento de boleto (${this.getDescricao()})`
    );

    // ! verifica se o débito foi bem-sucedido
    if (!debitoOk) {
      console.log("Pagamento de boleto recusado por saldo insuficiente.");
      return false;
    }

    console.log("Boleto pago com sucesso.");
    return true;
  }
}
