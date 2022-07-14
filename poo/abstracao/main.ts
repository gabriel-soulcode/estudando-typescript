/*
ABSTRACAO trata-se de idealizar um objeto do mundo real dentro do programa, dando a ele uma identidade, propriedades e métodos.
*/

// IDENTIDADE (exemplo Produto)
class Produto {
    // PROPRIEDADES / ATRIBUTOS
    descricao: string;
    codigo: string;
    preco: number;

    constructor(descricao: string, codigo: string, preco: number) {
        this.setDescricao(descricao);
        this.setCodigo(codigo);
        this.setPreco(preco);
    }

    // METODOS / FUNCOES
    public getDescricao(): string {
        return this.descricao;
    }
    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
    public getCodigo(): string {
        return this.codigo;
    }
    public setCodigo(codigo: string) {
        this.codigo = codigo;
    }
    public getPreco(): number {
        return this.preco;
    }
    public setPreco(preco: number): void {
        this.preco = preco;
    }
}

let produto: Produto = new Produto("Arroz", "41526398", 4.5);
console.log(
    "Descricao: " + produto.descricao +
    "\nCodigo: " + produto.codigo +
    "\nPreco(R$): " + produto.preco
    );