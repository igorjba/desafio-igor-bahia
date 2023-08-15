class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let valorTotal = 0;
        for (let item of itens) {
            const [codigo, quantidade] = item.split(',');

            if (parseInt(quantidade) === 0) {
                return "Quantidade inválida!";
            }

            if (!this.cardapio[codigo]) {
                return "Item inválido!";
            }

            if ((codigo === "chantily" && itens.indexOf('cafe,1') === -1 && itens.indexOf('cafe,2') === -1 && itens.indexOf('cafe,3') === -1 && itens.indexOf('cafe,4') === -1) ||
                (codigo === "queijo" && itens.indexOf('sanduiche,1') === -1 && itens.indexOf('sanduiche,2') === -1 && itens.indexOf('sanduiche,3') === -1 && itens.indexOf('sanduiche,4') === -1)) {
                return "Item extra não pode ser pedido sem o principal";
            }

            valorTotal += this.cardapio[codigo] * parseInt(quantidade);
        }

        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03;
        } else if (metodoDePagamento !== 'debito') {
            return "Forma de pagamento inválida!";
        }

        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };
