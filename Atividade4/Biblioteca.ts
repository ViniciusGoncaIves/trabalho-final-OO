import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { Emprestimo } from "./Emprestimo";
import { Reserva } from "./Reserva";
import { Notificacao } from "./Notificacao";

export class Biblioteca {
  private livros: Livro[] = [];
  private usuarios: Usuario[] = [];
  private emprestimos: Emprestimo[] = [];
  private reservas: Reserva[] = [];

  private notificacao: Notificacao;

  constructor() {
    this.notificacao = new Notificacao();
  }


  public adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  public adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  public listarLivros(): Livro[] {
    return [...this.livros];
  }

  public listarUsuarios(): Usuario[] {
    return [...this.usuarios];
  }

  public listarEmprestimos(): Emprestimo[] {
    return [...this.emprestimos];
  }

  public listarReservas(): Reserva[] {
    return [...this.reservas];
  }


  public emprestarLivro(
    usuarioId: number,
    livroId: number,
    diasEmprestimo: number = 7
  ): Emprestimo | null {
    console.log("\n=== EMPRÉSTIMO DE LIVRO ===");

    const usuario = this.buscarUsuario(usuarioId);
    if (!usuario) {
      console.log(`Usuário com ID ${usuarioId} não encontrado.`);
      return null;
    }

    if (!usuario.isAtivo()) {
      console.log(`Usuário ${usuario.nome} está inativo.`);
      return null;
    }

    if (!usuario.podeRealizarEmprestimo()) {
      console.log(`Usuário ${usuario.nome} não pode emprestar. Multas pendentes: R$ ${usuario.getMultas().toFixed(2)}`);
      return null;
    }

    const livro = this.buscarLivro(livroId);
    if (!livro) {
      console.log(`Livro com ID ${livroId} não encontrado.`);
      return null;
    }

    if (!livro.reservarExemplar()) {
      console.log(
        `Não há exemplares disponíveis de "${livro.titulo}" para empréstimo.`
      );
      return null;
    }

    const novoId = this.emprestimos.length + 1;
    const emprestimo = new Emprestimo(novoId, livro, usuario, diasEmprestimo);

    this.emprestimos.push(emprestimo);

    this.notificacao.emprestimoRealizado(
      usuario,
      livro,
      emprestimo.getDataPrevista()
    );

    console.log(`Empréstimo registrado [${emprestimo.id}]: ${usuario.nome} pegou "${livro.titulo}".`);

    return emprestimo;
  }


  public devolverLivro(emprestimoId: number): void {
    console.log("\n=== DEVOLUÇÃO DE LIVRO ===");

    const emprestimo = this.buscarEmprestimo(emprestimoId);
    if (!emprestimo) {
      console.log(`Empréstimo com ID ${emprestimoId} não encontrado.`);
      return;
    }

    if (emprestimo.isDevolvido()) {
      console.log(`Empréstimo ${emprestimoId} já foi devolvido.`);
      return;
    }

    emprestimo.devolver();

    const multa = emprestimo.calcularMulta(2);

    if (multa > 0) {
      emprestimo.usuario.adicionarMulta(multa);
      this.notificacao.multaAplicada(emprestimo.usuario, multa);
      console.log(
        `Devolução em atraso. Multa de R$ ${multa.toFixed(2)} aplicada para ${emprestimo.usuario.nome}.`);
    } else {
      console.log(
        `Devolução dentro do prazo. Nenhuma multa aplicada para ${emprestimo.usuario.nome}.`);
    }

    this.tratarReservasAposDevolucao(emprestimo.livro);
  }


  public reservarLivro(usuarioId: number, livroId: number): Reserva | null {
    console.log("\n=== RESERVA DE LIVRO ===");

    const usuario = this.buscarUsuario(usuarioId);
    if (!usuario) {
      console.log(`Usuário com ID ${usuarioId} não encontrado.`);
      return null;
    }

    const livro = this.buscarLivro(livroId);
    if (!livro) {
      console.log(`Livro com ID ${livroId} não encontrado.`);
      return null;
    }

    const novoId = this.reservas.length + 1;
    const reserva = new Reserva(novoId, usuario, livro);
    this.reservas.push(reserva);

    console.log(
      `Reserva registrada [${reserva.id}]: ${usuario.nome} reservou "${livro.titulo}".`
    );

    return reserva;
  }

  private tratarReservasAposDevolucao(livro: Livro): void {
    const reservaAtiva = this.reservas.find(
      (r) => r.livro === livro && r.isAtiva()
    );

    if (!reservaAtiva) {
      console.log(`Nenhuma reserva ativa para o livro "${livro.titulo}".`);
      return;
    }

    this.notificacao.reservaDisponivel(reservaAtiva.usuario, livro);
    reservaAtiva.marcarComoAtendida();
  }


  public buscarLivros(termo: string): Livro[] {
    const termoLower = termo.toLowerCase();

    const encontrados = this.livros.filter(
      (l) =>
        l.titulo.toLowerCase().includes(termoLower) ||
        l.autor.toLowerCase().includes(termoLower)
    );

    console.log(`\n=== BUSCA POR: "${termo}" ===`);
    if (encontrados.length === 0) {
      console.log("Nenhum livro encontrado.");
    } else {
      for (const livro of encontrados) {
        console.log(
          `• "${livro.titulo}" - ${livro.autor} (${livro.ano}) | Disp: ${livro.getDisponiveis()}/${livro.getQuantidadeTotal()}`
        );
      }
    }

    return encontrados;
  }


  private buscarUsuario(id: number): Usuario | undefined {
    return this.usuarios.find((u) => u.id === id);
  }

  private buscarLivro(id: number): Livro | undefined {
    return this.livros.find((l) => l.id === id);
  }

  private buscarEmprestimo(id: number): Emprestimo | undefined {
    return this.emprestimos.find((e) => e.id === id);
  }
}
