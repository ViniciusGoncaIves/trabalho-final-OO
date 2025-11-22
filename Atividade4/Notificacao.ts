import { Usuario } from "./Usuario";
import { Livro } from "./Livro";

export class Notificacao {
  
  public enviar(usuario: Usuario, mensagem: string): void {
    console.log(`Notificação para ${usuario.nome}: ${mensagem}`);
  }

  public emprestimoRealizado(
    usuario: Usuario,
    livro: Livro,
    dataPrevistaDevolucao: Date
  ): void {
    console.log("\n[NOTIFICAÇÃO: EMPRÉSTIMO]");
    console.log(`${usuario.nome}, você emprestou o livro "${livro.titulo}".`);
    console.log(
      `Devolução prevista para: ${dataPrevistaDevolucao.toLocaleDateString("pt-BR")}.`
    );
  }

  public reservaDisponivel(usuario: Usuario, livro: Livro): void {
    console.log("\n[NOTIFICAÇÃO: RESERVA DISPONÍVEL]");
    console.log(
      `${usuario.nome}, o livro que você reservou está agora disponível: "${livro.titulo}".`
    );
  }

  public multaAplicada(usuario: Usuario, valorMulta: number): void {
    console.log("\n[NOTIFICAÇÃO: MULTA]");
    console.log(
      `${usuario.nome}, foi aplicada uma multa de R$ ${valorMulta.toFixed(2)} ao seu cadastro.`
    );
  }
}
