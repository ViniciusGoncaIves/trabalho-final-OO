import { Livro } from "./Livro";
import { Membro } from "./Membro";

// ! criacao das 4 instancias de livros
const livro1 = new Livro("Como cozinhar abobrinha", "Chef Mr.Queijo", "Cozinha das amigas", 2020, true);
const livro2 = new Livro("Como ficar rico sem dinhero", "Mr. Bean", "Hebert Richards", 2025, true);
const livro3 = new Livro("Arrumando uma namorada", "Andressa Urach", "Privacy", 2024, true);
const livro4 = new Livro("Lagarto Esquimó", "Luiz Inácio Lula da Silva", "PT", 2022, true);

// ! criacao das 3 instancias de membros
const membro1 = new Membro("Vinícius", "123456789");
const membro2 = new Membro("Edivan", "987654321");
const membro3 = new Membro("Armandinho", "456789123");

// ! 1) Vinícius pega o livro 1 emprestado
console.log("\n*************************************\n")
membro1.pegarEmprestado(livro1);
console.log("\n*************************************\n")

// ! 2) Vinícius tenta pegar o mesmo livro de novo emprestado, deve ocorrer uma falha pois esse livro ja foi emprestado por ele mesmo
membro1.pegarEmprestado(livro1);
console.log("\n*************************************\n")

// ! 3) Edivan pega o livro 2 emprestado
membro2.pegarEmprestado(livro2);
console.log("\n*************************************\n")

// ! 4) Armandinho pega o livro 3 emprestado
membro3.pegarEmprestado(livro3);
console.log("\n*************************************\n")

// ! 5) Edivan tenta pegar o livro 3, porem falha pois esse livro ja esta emprestado para armandinho
membro2.pegarEmprestado(livro3);
console.log("\n*************************************\n")

// ! 6) Vinícius devolve o livro 1
membro1.devolverLivro(livro1);
console.log("\n*************************************\n")

// ! 7) Armandinho devolve o livro 3
membro3.devolverLivro(livro3);
console.log("\n*************************************\n")

// ! 8) Agora Edivan consegue pegar o livro 3 que antes estava emprestado para armandinho
membro2.pegarEmprestado(livro3);
console.log("\n*************************************\n")

// ! 9) Vinícius pega o livro 4 emprestado
membro1.pegarEmprestado(livro4);
console.log("\n*************************************\n")

// ! 10) Edivan tenta devolver um livro que ele não tem gerando uma falha pois o livro nunca foi emprestado por ele
membro2.devolverLivro(livro4);
console.log("\n*************************************\n")

// ! 11) Armandinho tenta devolver um livro que já devolveu, no caso o livro 3
membro3.devolverLivro(livro3);
console.log("\n*************************************\n")

// ! 12) Vinícius devolve o livro 4
membro1.devolverLivro(livro4);
console.log("\n*************************************\n")


