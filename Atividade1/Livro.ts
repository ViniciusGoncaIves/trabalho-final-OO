// Classe que representa o livro da biblioteca
export class Livro {
  private titulo: string;
  private autor: string;
  private editora: string;
  private anoPublicacao: number;
  private disponivel: boolean;

// constructor com os parâmetros para inicializar os atributos do livro no momnento da criação do objeto.  
  constructor(titulo: string,autor: string,editora: string,anoPublicacao: number,disponivel: boolean) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.anoPublicacao = anoPublicacao;
    this.disponivel = disponivel;
  }

  public emprestar(): boolean {
    // valida se o livro esta diponivel para emprestimo
    if (!this.disponivel) {
      console.log(`O livro "${this.titulo}" já está emprestado.`);
      return false;
    }
    // se estiver disponivel realiza o emprestimo
    this.disponivel = false;
    console.log(`Empréstimo realizado: "${this.titulo}" agora está emprestado.`);
    return true;
  }

  
  
  public devolver(): boolean {
    // valida se o livros ja nao foi devolvido
    if (this.disponivel) {
      console.log(`Não é possível devolver "${this.titulo}", pois ele já está disponível.`);
      return false;
    }
    // se nao foi devolvido efetua a devolução
    this.disponivel = true;
    console.log(`Devolução realizada: "${this.titulo}" agora está disponível.`);
    return true;
  }

  // get para verificar se o livro está disponível
  public getTitulo(): string {
    return this.titulo;
  }
}
