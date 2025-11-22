// Classe que representa um membro da biblioteca e controla os livros que pegou emprestado
import { Livro } from "./Livro";

export class Membro {
  private nome: string;
  private identificacao: string;
  private livrosEmprestados: Livro[] = [];

  constructor(nome: string, identificacao: string) {
    this.nome = nome;
    this.identificacao = identificacao;
  }

  // metodo responsavel por gerenciar o emprestimo de um livroW
  public pegarEmprestado(livro: Livro): boolean {
    // verifica se o membro ja esta com o livro emprestado
    if (this.livrosEmprestados.includes(livro)) {
      console.log(`${this.nome} já está com o livro "${livro.getTitulo()}" emprestado.`);
      return false;
    }

    // empresta um livro para o membro atraves do metodo da classe livro
    const emprestado = livro.emprestar();

    // se o livro foi emprestado com sucesso, adiciona o livro na lista de livros do membro
    if (emprestado) {
      this.livrosEmprestados.push(livro);
      console.log(`${this.nome} pegou emprestado o livro "${livro.getTitulo()}".`);
      return true;
    }
    // se nao foi possivel emprestar o livro avisa o membro
    console.log(`${this.nome} não conseguiu pegar o livro "${livro.getTitulo()}" emprestado.`);
    return false;
  }

  
  // metodo responsavel por gerenciar a devolucao de um livro
  public devolverLivro(livro: Livro): boolean {
    // verifica se o membro realmente esta com o livro emprestado
    if (!this.livrosEmprestados.includes(livro)) {
      console.log(`${this.nome} não pode devolver "${livro.getTitulo()}", pois ainda não foi emprestado por ele.`);
      return false;
    }

    // devolve o livro atraves do metodo da classe livro
    const devolvido = livro.devolver();

    // validacao para verificar se a devolucao deu certo
    if (devolvido) {
      // se o livro foi devolvido, remove o livro da lista de livros emprestados do membro
      this.livrosEmprestados = this.livrosEmprestados.filter((lrv) => lrv !== livro);
      console.log(`${this.nome} devolveu o livro "${livro.getTitulo()}".`);
      return true;
    }
    // se nao foi possivel devolver o livro avisa o membro
    console.log(`Não foi possível devolver o livro"${livro.getTitulo()}".`);
    return false;
  }

  public getNome(): string {
    return this.nome;
  }
}
