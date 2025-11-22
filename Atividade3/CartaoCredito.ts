import { ContaBancaria } from "./ContaBancaria";
import { MeioPagamento } from "./MeioPagamento";

// ! classe CartaoCredito que implementa a interface MeioPagamento
// ! onde sera obrigada a implementar os métodos getDescricao e processarPagamento
export class CartaoCredito implements MeioPagamento {
  private numero: string;
  private nomeImpresso: string;
  private limiteTotal: number;
  private limiteDisponivel: number;

  constructor(numero: string, nomeImpresso: string, limiteTotal: number) {
    if (limiteTotal <= 0) {
      throw new Error("Limite total deve ser maior que zero.");
    }

    this.numero = numero;
    this.nomeImpresso = nomeImpresso;
    this.limiteTotal = limiteTotal;
    this.limiteDisponivel = limiteTotal;
  }
// ! metodo para obter a descrição do cartão de crédito
  public getDescricao(): string {
    return `Cartão de Crédito final ${this.numero.slice(-4)}`;
  }

  // ! metodo para processar o pagamento com cartão de crédito
  public processarPagamento(valor: number, conta: ContaBancaria): boolean {
    console.log(`\n>>> Pagamento via ${this.getDescricao()} no valor de R$ ${valor.toFixed(2)}`);

    // ! validação do valor e do limite disponível
    if (valor <= 0) {
      console.log("Valor inválido para pagamento no crédito.");
      return false;
    }
    // ! verifica se o limite disponível é suficiente
    if (valor > this.limiteDisponivel) {
      console.log("Limite de crédito insuficiente.");
      return false;
    }

    // ! consideramos que o cartão está vinculado à conta e o valor é debitado dela
    const debitoOk = conta.debitar(
      valor,
      `Pagamento com cartão de crédito (${this.getDescricao()})`
    );

    // ! verifica se o débito foi bem-sucedido
    if (!debitoOk) {
      console.log("Não foi possível debitar da conta para pagar no crédito.");
      return false;
    }

    this.limiteDisponivel -= valor;
    console.log("Pagamento no crédito aprovado.");
    return true;
  }
}
