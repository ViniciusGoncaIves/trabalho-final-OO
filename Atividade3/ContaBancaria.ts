// ! ! Classe que representa uma conta bancária com saldo e histórico de movimentações
export class ContaBancaria {
  private numero: string;
  private titular: string;
  private saldo: number;
  private historico: string[] = [];

  constructor(numero: string, titular: string, saldoInicial: number = 0) {
    if (saldoInicial < 0) {
      throw new Error("Saldo inicial não pode ser negativo.");
    }

    this.numero = numero;
    this.titular = titular;
    this.saldo = saldoInicial;
    // ! Validacao no constructor para que saldo inicial nao seja negativo
    this.registrarMovimentacao(
      `Conta criada com saldo inicial de R$ ${saldoInicial.toFixed(2)}.`
    );
  }

  // ! Métodos de acesso (encapsulamento)
  public getNumero(): string {
    return this.numero;
  }
 // ! Métodos de acesso (encapsulamento)
  public getTitular(): string {
    return this.titular;
  }
// ! Métodos de acesso (encapsulamento)
  public getSaldo(): number {
    return this.saldo;
  }

  public getHistorico(): string[] {
    // ! retorna uma cópia para não permitir alteração direta
    return [...this.historico];
  }

  // ! esse metodo vai registrar as movimentações da conta
  private registrarMovimentacao(descricao: string): void {
    const data = new Date().toLocaleString("pt-BR");
    this.historico.push(`[${data}] ${descricao}`);
  }

  // ! metodo para creditar valor na conta
  public creditar(valor: number, descricao: string): void {
    if (valor <= 0) {
      throw new Error("Valor de crédito deve ser maior que zero.");
    }
    this.saldo += valor;
    this.registrarMovimentacao(
      `Crédito de R$ ${valor.toFixed(2)}. ${descricao}`
    );
  }

  // ! metodo para debitar valor da conta
  public debitar(valor: number, descricao: string): boolean {
    if (valor <= 0) {
      console.log("Valor de débito deve ser maior que zero.");
      return false;
    }

    if (valor > this.saldo) {
      console.log(
        `Saldo insuficiente na conta ${this.numero} do titular ${this.titular}.`
      );
      return false;
    }

    this.saldo -= valor;
    this.registrarMovimentacao(
      `Débito de R$ ${valor.toFixed(2)}. ${descricao}`
    );
    return true;
  }
}
