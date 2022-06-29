class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
    this.editId = null;
  }
  salvar() {
    let produto = this.lerDados();

    if (this.validaCampos(produto)) {
      if (this.editId == null) {
        this.adicionar(produto);
      } else {
        this.atualizar(this.editId, produto);
      }
    }

    this.listaTabela();
    this.cancelar();
  }
  listaTabela() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_preco = tr.insertCell();
      let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_produto.innerText = this.arrayProdutos[i].nomeProduto;
      td_preco.innerText = this.arrayProdutos[i].preco;

      td_id.classList.add("center");

      let imgEdit = document.createElement("img");
      imgEdit.src = "img/editar.png";
      imgEdit.setAttribute(
        "onclick",
        "produto.preparaEdicao(" + JSON.stringify(this.arrayProdutos[i]) + ")"
      );

      td_acoes.appendChild(imgEdit);

      let imgDelet = document.createElement("img");
      imgDelet.src = "img/delet.png";
      imgDelet.setAttribute(
        "onclick",
        "produto.deletar(" + this.arrayProdutos[i].id + ")"
      );

      td_acoes.appendChild(imgDelet);
    }
  }

  adicionar(produto) {
    produto.preco = parseFloat(produto.preco);
    this.arrayProdutos.push(produto);
    this.id++;
  }

  atualizar(id, produto) {
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      if (this.arrayProdutos[i].id == id) {
        this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
        this.arrayProdutos[i].preco = produto.preco;
      }
    }
  }

  preparaEdicao(dados) {
    this.editId = dados.id;
    document.getElementById("produto").value = dados.nomeProduto;
    document.getElementById("preco").value = dados.preco;

    document.getElementById("salvar").innerText = "Atualizar";
  }

  lerDados() {
    let produto = {};
    produto.id = this.id;
    produto.nomeProduto = document.getElementById("produto").value;
    produto.preco = document.getElementById("preco").value;

    return produto;
  }

  validaCampos(produto) {
    let mensagem = "";
    if (produto.nomeProduto == "") {
      mensagem += "Informe o nome do produto \n";
    }
    if (produto.preco == "") {
      mensagem += "Informe o preço do produto \n";
    }

    if (mensagem != "") {
      alert(mensagem);
      return false;
    }
    return true;
  }
  cancelar() {
    document.getElementById("produto").value = "";
    document.getElementById("preco").value = "";

    document.getElementById("salvar").innerText = "Salvar";
    this.editId = null;
  }
  deletar(id) {
    if (confirm("Você realmente quer deletar este produto? " + id)) {
      let tbody = document.getElementById("tbody");

      for (let i = 0; i < this.arrayProdutos.length; i++) {
        if (this.arrayProdutos[i].id == id) {
          this.arrayProdutos.splice(i, 1);
          tbody.deleteRow(i);
        }
      }
    }
  }
}

let produto = new Produto();
