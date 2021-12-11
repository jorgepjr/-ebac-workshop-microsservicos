const Nota = require("../models/Nota");

module.exports = {
    name: "avaliacao-service",
    version: 1,
    dependencies: [
        "v1.catalogo-service"
    ],

    actions:{
        async avaliar(ctx){

            const filmeId = ctx.params.filmeId
            const valor = ctx.params.valor;

            const existe = await ctx.call("v1.catalogo-service.exists", {
                id: filmeId
            });

            if(!existe){
                throw "Filme não existe!"
            }

            if(valor < 0 || valor <= 5){
                throw "O valor deve ser maior que 5!"
            }

            return Nota.create({
                filmeId, valor
            })
        }
    }
}