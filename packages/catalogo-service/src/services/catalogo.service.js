const Filme = require("../models/Filme");

module.exports = {
    name: 'catalogo-service',
    version: 1,

    actions: {
        create: {
            async handler(ctx) {
                if (ctx.params) {
                    if (ctx.params.nome && ctx.params.sinopse) {
                        return await Filme.create({
                            nome: ctx.params.nome,
                            sinopse: ctx.params.sinopse
                        })
                    }
                }
                return false;
            }
        }
    }
}