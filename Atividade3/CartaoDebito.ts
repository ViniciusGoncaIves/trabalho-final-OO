import { ContaBancaria } from "./ContaBancaria";
import { MeioPagamento } from "./MeioPagamento";

// ! classe CartaoDebito que implementa a interface MeioPagamento
// ! onde sera obrigada a implementar os métodos getDescricao e processarPagamento
export class CartaoDebito implements MeioPagamento {
  private numero: string;
  private nomeImpresso: string;

  constructor(numero: string, nomeImpresso: string) {
    this.numero = numero;
    this.nomeImpresso = nomeImpresso;
  }

  // ! metodo para obter a descrição do cartão de débito
  public getDescricao(): string {
    return `Cartão de Débito final ${this.numero.slice(-4)}`;
  }

  // ! metodo para processar o pagamento com cartão de débito
  public processarPagamento(valor: number, conta: ContaBancaria): boolean {
    console.log(`\n>>> Pagamento via ${this.getDescricao()} no valor de R$ ${valor.toFixed(2)}`);
  // ! validação do valor
    if (valor <= 0) {
      console.log("Valor inválido para pagamento no débito.");
      return false;
    }
  // ! consideramos que o cartão está vinculado à conta e o valor é debitado dela
    const debitoOk = conta.debitar(
      valor,
      `Pagamento com cartão de débito (${this.getDescricao()})`
    );

  // ! verifica se o débito foi bem-sucedido
    if (!debitoOk) {
      console.log("Pagamento no débito recusado por saldo insuficiente.");
      return false;
    }

    console.log("Pagamento no débito aprovado.");
    return true;
  }
}
