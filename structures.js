class CarrinhoDeCompras {
  constructor(cliente, data, novoCliente) {
    this.cliente = cliente;
    this.novoCliente = novoCliente;
    this.data = data;
    this.itens = [];
    this.valorTotal = 0;
    this.cupom = null;
  }

  // adicionar produtos
  adicionarProduto(produto, quantidade) {
    if (this.itens.includes(produto.nome)) {
      const productId = this.itens.indexOf(produto);
      this.itens[productId].quantidade + 1;
      this.calcularValorTotal();
    } else {
      this.itens.push({ produto, quantidade });
      this.calcularValorTotal();
    }
  }

  // recebe um array de objetos com um produto e a sua respectiva quantidade

  adicionarProdutos(lista) {
    this.itens.push(...lista);
    this.calcularValorTotal();
  }

  // recalcular valor total para novos produtos adicionados (usar concatenação de operadores)
  calcularValorTotal() {
    let amount = 0;

    for (item in this.itens) {
      amount += item.produto.preco * item.produto.quantidade;
      this.adicionarCupom();
    }
    this.valorTotal = amount;
  }

  // adicionar cupom de desconto
  adicionarCupom(codigo) {
    const cupons = ["IOASYS5", "IOASYS10", "IOASYS15"];
    const discount = condigo.toUpperCase();

    if (cupons.includes(discount) && parseInt(discount.slice(5)) <= 15) {
      this.cupom = this.valorTotal * (parseInt(discount.slice(5)) / 100);
    }
  }

  // calcular quantidade de itens totais
  get totalDeItens() {
    let quantity = 0;

    for (item in this.itens) {
      quantity++;
    }

    return quantity;
  }

  // listar produtos
  get listaDeProdutos() {
    for (item in this.itens) {
      return `${item.produto.nome} - ${item.quantidade} un. \n Valor total ${
        item.produto.preco * item.quantidade
      }`;
    }
  }

  // calcular valor final (desconto para novos clientes OU cupom)
  fecharCompra() {
    // 20% de desconto para novos clientes
    if (this.novoCliente) {
      return (this.valorTotal *= 0), 2;
      // desconto de XX% do cupom
    } else if (this.cupom) {
      return (this.valorTotal -= this.cupom);
      // 5% de desconto para compras acima de 100 reais
    } else {
      return (this.valorTotal *= 0), 05;
    }
  }
}

function Produto(codigo, nome, preco) {
  this.codigo = codigo;
  this.nome = nome;
  this.preco = preco;
}

const meuCarrinho = new CarrinhoDeCompras();

meuCarrinho.adicionarProduto({}, 1);

meuCarrinho.adicionarProduto(new Produto(), 1);

// adicionar uma lista
const meusItens = [];

meuCarrinho.adicionarProdutos(meusItens);

meuCarrinho.adicionarProdutos([]);

meuCarrinho.adicionarCupom("camp50");

function resumoDaCompra(carrinho) {
  return (metodoDePagamento, parcelas) => {};
}

console.log(resumoDaCompra(meuCarrinho)("Cartão de Crédito", 3));
