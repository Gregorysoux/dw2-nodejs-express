//CLASSES NO JAVASCRIPT 
class Carro{
    //Nome de classes devem iniciar com a primeira letra maiúscula

    //ATRIBUTOS
    constructor(marca,modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    //METÓDOS
    buzinar() {
        return "Beep! Beep!"
    }
}

//CRIANDO uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat","Uno","2012");
//Acessando os ATRIBUTOS e MÉTODOS do objeto
document.write(
    `<p> O carro popular ${carroPopular.marca}, modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e 
    quando ele buzina faz ${carroPopular.buzinar()}</p>`
);

//CRIANDO UMA NOVA INSTÂNCIA : Carro Conversível
const carroConversivel = new Carro();
carroConversivel.marca = "Chevrolet";
carroConversivel.modelo = "Camaro";
carroConversivel.ano = "2026";

//ADICIONANDO UM NOVO ATRIBUTO (não previsto na classe)
carroConversivel.corNeon = "Azul";
//ADICIONANDO UM NOVO MÉTODO (não previsto na classe)
carroConversivel.turbo = function(){
    return "Vrummmmm! O carro está acelerando!!!";
};

document.write(
    `<p>O carro ${carroConversivel.marca} ${carroConversivel.modelo} tem neon da cor ${carroConversivel.corNeon}.</p>`
)

document.write(
    `<p>${carroConversivel.turbo()}</p>`
)
