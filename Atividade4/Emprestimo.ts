import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Emprestimo {
  public readonly id: number;
  public readonly livro: Livro;
  public readonly usuario: Usuario;

  private readonly dataRetirada: Date;
  private readonly dataPrevista: Date;
  private dataDevolucao?: Date;

  constructor(
    id: number,
    livro: Livro,
    usuario: Usuario,
    diasDeEmprestimo: number = 7
  ) {
    this.id = id;
    this.livro = livro;
    this.usuario = usuario;

    this.dataRetirada = new Date();

    this.dataPrevista = new Date();
    this.dataPrevista.setDate(this.dataPrevista.getDate() + diasDeEmprestimo);
  }

  public getDataPrevista(): Date {
    return this.dataPrevista;
  }

  public isDevolvido(): boolean {
    return this.dataDevolucao !== undefined;
  }

  public devolver(): void {
    if (this.dataDevolucao) {
      return; 
    }

    this.dataDevolucao = new Date();
    this.livro.devolverExemplar();
  }

  public calcularMulta(valorPorDia: number): number {
    if (!this.dataDevolucao) {
      return 0;
    }

    if (this.dataDevolucao <= this.dataPrevista) {
      return 0;
    }

    const diffMs = this.dataDevolucao.getTime() - this.dataPrevista.getTime();
    const diasAtraso = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diasAtraso <= 0) {
      return 0;
    }

    return diasAtraso * valorPorDia;
  }
}
