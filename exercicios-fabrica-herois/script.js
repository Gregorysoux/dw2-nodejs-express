class Heroi {

    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
    }

    correr() {
        return "O herói está correndo";
    }

    andar() {
        return "O herói está andando";
    }

    atacar() {
        return "O herói está atacando";
    }

    defender() {
        return "O herói está se defendendo";
    }
}

const HomemAranha = new Heroi("Homem-Aranha", 100, 80, 70);

HomemAranha.teia = 1;

HomemAranha.sentidoAranha = function() {
    return "Homem-Aranha detectou perigo!";
};

const Superman = new Heroi("Superman", 150, 100, 100);

Superman.podeVoar = 1;

Superman.visaoCalor = function() {
    return "Superman está usando sua visão de calor.";
};


const Batman = new Heroi("Batman", 100, 70, 80);

Batman.esconder = 1;

Batman.investigar = function() {
    return "Batman está investigando um crime.";
};

document.write(Batman.investigar());
document.write("<br>");

document.write(Superman.visaoCalor());
document.write("<br>");

document.write(HomemAranha.sentidoAranha());


