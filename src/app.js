import Carro from "./carros";

class App {
    constructor(){
        this.garagem = [];
        this.id = 1;

        this.buttonAdicionar = document.getElementById("adicionar_carro");
        this.buttonColocarNaGaragem = document.getElementById("colocarnagaragem");

        this.corInput = document.getElementById("cor");
        this.modeloInput = document.getElementById("modelo");
        this.nomeInput = document.getElementById("nome");
        this.marcaInput = document.getElementById("marca");
        this.idInput = document.getElementById("idcarro");
        
        this.init();
    }

    init() {
        this.buttonAdicionar.onclick = (event) => this.cadastrar();
        this.buttonColocarNaGaragem.onclick = (event) => this.colocarCarroNaGaragem(this.idInput.value);
    }

    cadastrar() {
        const carro = new Carro(this.nomeInput.value, this.modeloInput.value, this.corInput.value, this.marcaInput.value, this.id)
        this.id ++;
        
        this.limparInput();
        
    }

    limparInput(){
        this.corInput.value = "";
        this.nomeInput.value = "";
        this.marcaInput.value = "";
        this.modeloInput.value = "";
        
    }
    
    imprimirCarros(){
        this.garagem.forEach(
            carro => console.log(carro)
        ) 
    }

    colocarCarroNaGaragem(id) {
        const carro = this.garagem.filter(carro => carro.id === id);

       if (carro.ligar() === true) {
            this.garagem.push(carro);
            this.imprimirCarros();
        } else {
            alert("Nao foi possivel colocar o carro na garagem.")
        }
    }

};

export default new App();