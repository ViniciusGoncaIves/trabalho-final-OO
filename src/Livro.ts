class Livro{
    private titulo: string;
    private autor: string
    private anoPublicacao: number;
    private disponivel: boolean;

    constructor(titulo: string, autor: string, anoPublicacao: number){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true;
    }
}

let livro1 = new Livro("1984", "George Orwell", 1949);
let livro2 = new Livro("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(livro1);
console.log(livro2);