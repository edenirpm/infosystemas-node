const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Veículos',
      version: '1.0.0',
      description: 'Documentação da API de Veículos'
    },
    components: {
      schemas: {
        Vehicle: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            placa: { type: 'string' },
            chassi: { type: 'string' },
            renavam: { type: 'string' },
            modelo: { type: 'string' },
            marca: { type: 'string' },
            ano: { type: 'integer' }
          },
          required: ['placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano']
        }
      }
    }
  },
  apis: ['./src/routes/*.js'],
};

module.exports = swaggerJsdoc(options);