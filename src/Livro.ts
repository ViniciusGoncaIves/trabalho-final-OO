class Livro {
  private titulo: string;
  private autor: string;
  private editora: string;
  private anoPublicacao: number;
  private disponivel: boolean;

  constructor(titulo: string,autor: string,editora: string,anoPublicacao: number,disponivel: boolean) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.anoPublicacao = anoPublicacao;
    this.disponivel = disponivel;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getAutor(): string {
    return this.autor;
  }

  getEditora(): string {
    return this.editora;
  }

  getAnoPublicacao(): number {
    return this.anoPublicacao;
  }

  getDisponivel(): boolean {
    return this.disponivel;
  }

  emprestar(): void {
    if (!this.disponivel) {
      throw new Error(`Livro ${this.titulo} indisponível para empréstimo.`);
    }
    this.disponivel = false;
  }

  devolver(): void {
    if (this.disponivel) {
      throw new Error("Não foi possível devolver o livro, pois ele não foi emprestado ainda.");
    }
    this.disponivel = true;
  }
}

