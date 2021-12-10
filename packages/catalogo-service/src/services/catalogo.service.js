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
        },

        update: {
            async handler(ctx){
                let filme = await Filme.exists({_id: ctx.params.id});

                if(filme){
                    return await Filme.updateOne({nome: filme.nome, sinopse: filme.sinopse})
                }
            }
        },


        exists: {
            async handler(ctx) {
               if(ctx.params.id){
                   return await Filme.exists({_id: ctx.params.id});
               }
               return false;
            }
        },

        remove:{
            async handler(ctx){
                return await Filme.findByIdAndRemove({_id: ctx.params.id});
            }
        },

        list: {
            async handler() {
                return await Filme.find();
            }
        }
    }
}