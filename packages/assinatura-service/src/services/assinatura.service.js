const Cliente = require("../models/Cliente")

module.exports = {
    name: "assinatura-service",
    version: 1,
   
    actions:{

        async criar(ctx){
            if(ctx.params){
                return Cliente.create({
                    nome: ctx.params.nome,
                    cpf: ctx.params.cpf
                })
            }
            return false
        }
    }
}