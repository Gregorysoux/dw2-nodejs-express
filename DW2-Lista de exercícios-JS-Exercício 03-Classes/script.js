class Heroi{

    constructor(nome, vida, velocidadeforca) {
        this.nome;
        this.vida;
        this.velocidadeforca;
    }

    correr() {
        return "O herói está correndo"
    }
    
    andar() {
        return "O herói está andando"
    }
    atacar() {
        return "O herói está atacando"
    }
    defender() {
        return "O herói está se defendo"
    }

}

const HomemAranha = new Heroi("Homem-Aranha");

const Superman = new Heroi("Superman");

const Batman = new Heroi("Batman");
