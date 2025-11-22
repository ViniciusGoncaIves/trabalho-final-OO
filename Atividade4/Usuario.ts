export type TipoUsuario = "ESTUDANTE" | "PROFESSOR" | "COMUM";

export class Usuario {
  public readonly id: number;
  public readonly nome: string;
  public readonly cpf: string;
  public readonly tipo: TipoUsuario;
  public readonly telefone: string;

  private ativo: boolean;
  private multas: number;

  constructor(
    id: number,
    nome: string,
    cpf: string,
    tipo: TipoUsuario,
    telefone: string,
    ativoInicial: boolean = true,
    multasIniciais: number = 0
  ) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.tipo = tipo;
    this.telefone = telefone;

    this.ativo = ativoInicial;
    this.multas = multasIniciais < 0 ? 0 : multasIniciais;
  }

  public podeRealizarEmprestimo(): boolean {
    return this.ativo && this.multas <= 0;
  }

  public isAtivo(): boolean {
    return this.ativo;
  }

  public adicionarMulta(valor: number): void {
    if (valor <= 0) {
      return;
    }
    this.multas += valor;
  }

  public getMultas(): number {
    return this.multas;
  }

  public ativar(): void {
    this.ativo = true;
  }

  public inativar(): void {
    this.ativo = false;
  }
}
