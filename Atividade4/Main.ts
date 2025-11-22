import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { Biblioteca } from "./Biblioteca";

const biblioteca = new Biblioteca();

const livro1 = new Livro(1, "Clean Code", "Robert Martin", 2008, 5, "Programação", 120);
const livro2 = new Livro(2, "O Hobbit", "J. R. R. Tolkien", 1937, 3, "Fantasia", 80);
const livro3 = new Livro(3, "Harry Potter", "J. K. Rowling", 1997, 2, "Fantasia", 90);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

const usuario1 = new Usuario(1, "Edivan", "11111111111", "ESTUDANTE", "11999999999");
const usuario2 = new Usuario(2, "Vinícius", "22222222222", "PROFESSOR", "11988888888");
const usuario3 = new Usuario(3, "Ruffles", "33333333333", "COMUM", "11977777777");

biblioteca.adicionarUsuario(usuario1);
biblioteca.adicionarUsuario(usuario2);
biblioteca.adicionarUsuario(usuario3);

const e1 = biblioteca.emprestarLivro(1, 1, 7);
const e2 = biblioteca.emprestarLivro(2, 2, 7);

biblioteca.reservarLivro(3, 1);

if (e1) {
  biblioteca.devolverLivro(e1.id);
}

if (e2) {
  biblioteca.devolverLivro(e2.id);
}

biblioteca.buscarLivros("clean");
biblioteca.buscarLivros("harry");
