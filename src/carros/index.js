class Carro {
    constructor (nome, modelo, cor, marca, id) {
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.modelo = modelo;
        this.ligado = false;
        this.id = id;
    };

    ligar() {
        console.log("ligando carro.")
        if(this.ligado) {
            console.log("carro já esta ligadado");
            console.log('Huhurururrrrrrrrr');
        } else {
            this.ligado = true;
        }

        return this.ligado;
    }

    desligar(){
        console.log("Desligando carro.")
    }
    
};

export default Carro;