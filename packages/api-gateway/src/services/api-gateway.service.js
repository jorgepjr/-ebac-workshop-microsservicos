const ApiService = require('moleculer-web');

module.exports = {
    name: "api-gateway",
    version:1,
    mixins: [ApiService],
    settings:{
        routes:[
            {
                path: "/api",
                aliases:{
                    "POST /catalogo": "v1.catalogo-service.criar",
                    "GET /catalogo/": "v1.catalogo-service.listar",
                    "GET /catalogo": "v1.catalogo-service.listar",
                    "PATCH /catalogo": "v1.catalogo-service.atualizar",
                    "DELETE /catalogo/:id": "v1.catalogo-service.excluir",

                    "POST /assinatura": "v1.assinatura-service.criar"
                }
            }
        ]
    }
}