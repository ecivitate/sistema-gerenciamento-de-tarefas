import { FastifyInstance } from 'fastify';
import ExemploController from './Exemplo.controller';

async function cardsRoutes(fastify: FastifyInstance) {
  fastify.get('/exemplos', ExemploController.findAll);
  fastify.post('/exemplos', ExemploController.create);
  fastify.put('/exemplos/:id', ExemploController.update);
  fastify.delete('/exemplos/:id', ExemploController.delete);
}

export default cardsRoutes;