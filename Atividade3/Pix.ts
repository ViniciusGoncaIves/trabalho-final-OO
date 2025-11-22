import { ContaBancaria } from "./ContaBancaria";
import { MeioPagamento } from "./MeioPagamento";

// ! classe Pix que implementa a interface MeioPagamento
// ! onde sera obrigada a implementar os métodos getDescricao e processarPagamento
export class Pix implements MeioPagamento {
  private chave: string;
  private descricao: string;

  constructor(chave: string, descricao: string) {
    if (!chave || chave.trim().length < 3) {
      throw new Error("Chave PIX inválida.");
    }

    this.chave = chave;
    this.descricao = descricao;
  }
// ! metodo para obter a descrição do PIX
  public getDescricao(): string {
    return `PIX para chave "${this.chave}"`;
  }

// ! metodo para processar o pagamento via PIX
  public processarPagamento(valor: number, conta: ContaBancaria): boolean {
    console.log(`\n>>> Pagamento via PIX no valor de R$ ${valor.toFixed(2)} - ${this.getDescricao()}`);
// ! validação do valor
    if (valor <= 0) {
      console.log("Valor inválido para PIX.");
      return false;
    }
// ! consideramos que o PIX será pago debitando o valor da conta bancária
    const debitoOk = conta.debitar(
      valor,
      `Pagamento via PIX (${this.descricao})`
    );
// ! verifica se o débito foi bem-sucedido
    if (!debitoOk) {
      console.log("PIX recusado por saldo insuficiente.");
      return false;
    }

    console.log("PIX enviado com sucesso.");
    return true;
  }
}
