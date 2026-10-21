import express from "express";
const router = express.Router();
// Importando o Model
import Usuario from "../models/Usuario.js";
// Importando a biblioteca BCRYPT (hash de senha)
import bcrypt from "bcrypt";
// Importando o Middleware de Autenicação
import Auth from "../middleware/Auth.js" 

// ROTA DE LOGIN
router.get("/login",  Auth, (req, res) => {
  res.render("login",{
    loggedOut: true,
  });
});

//ROTA DE LOGOUT
router.get("/logout", (req,res) => {
  //Limpa a sessão
  req.session.user = undefined;
  // Redireciona para home
  res.redirect("/") 
});

// ROTA DE AUTENTICAÇÃO
router.post("/autenticar",  Auth, (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;
  // Buscando o usuário no banco
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    // SE O USUÁRIO EXISTIR
    if (usuario != undefined) {
      // VALIDANDO A SENHA (HASH)
      const senhaCorreta = bcrypt.compareSync(password, usuario.password);
      // SE A SENHA FOR VÁLIDA
      if (senhaCorreta) {
        // AUTORIZA O LOGIN E CRIA A SESSÃO PARA O USUÁRIO
        req.session.user = {
          id: user.id,
          email: usuario.email
        }
        // res.send(`Usuário logado:<br>
        //   ID: ${req.session.user['id']} <br>
        //   E-mail: ${req.session.user["email"]}`);
        //res.redirect("/");
        res.redirect("/")
        // SE A SENHA FOR INVÁLIDA
      } else {
        res.send(`Senha inválida!<br>
            Verifique os dados e tente novamente!<br>
            <a href="/login">Voltar</a>`);
      }
      // SE O USUÁRIO NÃO EXISTIR
    } else {
      res.send(`Usuário não existe!<br>
            Verifique os dados e tente novamente!<br>
            <a href="/login">Voltar</a>`);
    }
  });
});
// ROTA DE CADASTRO
router.get("/cadastro",  Auth, (req, res) => {
  res.render("cadastro", {
    loggedOut: true,
  });
});

router.post("/cadastro/novo",  Auth, (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;

  // Verificando se o usuário já existe
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    // Usuário não encontrado
    if (usuario == undefined) {
      // Cadastra o usuário
      // GERANDO O HASH DE SENHA
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      // Enviando para o banco de dados
      Usuario.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log("Erro ao criar a conta. Erro: " + error);
        });
      // USUÁRIO JÁ CADASTRADO
    } else {
      res.send(`Usuário já cadastrado!<br>
            Verifique os dados e tente novamente.<br>
            <a href="/login">Voltar</a>`);
    }
  });
});
export default router;
