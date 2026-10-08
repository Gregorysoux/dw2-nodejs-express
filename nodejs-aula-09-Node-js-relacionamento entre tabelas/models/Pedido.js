//Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";    
//Importando a biblioteca sequelize
import Sequelize from "sequelize";

//Método define defina a estrutura de uma tabela no banco 
const Pedido = connection.define('pedidos', {
    //Atributos da tabela 'pedidos'
    numero: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    valor: { 
    type: Sequelize.FLOAT,
    allowNull: false
    },
    //chave estrangeira
    cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

// O método .sync() sincroniza a estrutura do model com a tabela no banco de dados
// force: false sincroniza a tabela somente na primeira vez (somente se não existir)
Pedido.sync({force: false})

// Exportando o módulo
export default Pedido;
