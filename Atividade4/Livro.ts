export class Livro {
  public readonly id: number;
  public readonly titulo: string;
  public readonly autor: string;
  public readonly ano: number;
  public readonly categoria: string;
  public readonly preco: number;

  private quantidadeTotal: number;
  private disponiveis: number;

  constructor(
    id: number,
    titulo: string,
    autor: string,
    ano: number,
    quantidade: number,
    categoria: string,
    preco: number
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.quantidadeTotal = quantidade;
    this.disponiveis = quantidade;
    this.categoria = categoria;
    this.preco = preco;
  }

  public getQuantidadeTotal(): number {
    return this.quantidadeTotal;
  }

  public getDisponiveis(): number {
    return this.disponiveis;
  }

  public reservarExemplar(): boolean {
    if (this.disponiveis <= 0) return false;
    this.disponiveis--;
    return true;
  }

  public devolverExemplar(): void {
    if (this.disponiveis < this.quantidadeTotal) {
      this.disponiveis++;
    }
  }
}
