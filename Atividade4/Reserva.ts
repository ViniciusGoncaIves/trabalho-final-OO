import { Usuario } from "./Usuario";
import { Livro } from "./Livro";

export class Reserva {
  public readonly id: number;
  public readonly usuario: Usuario;
  public readonly livro: Livro;
  public readonly dataReserva: Date;

  private ativa: boolean;

  constructor(id: number, usuario: Usuario, livro: Livro) {
    this.id = id;
    this.usuario = usuario;
    this.livro = livro;
    this.dataReserva = new Date();
    this.ativa = true;
  }

  public isAtiva(): boolean {
    return this.ativa;
  }

  public cancelar(): void {
    if (!this.ativa) {
      return;
    }
    this.ativa = false;
  }

  public marcarComoAtendida(): void {
    if (!this.ativa) {
      return;
    }
    this.ativa = false;
  }
}
