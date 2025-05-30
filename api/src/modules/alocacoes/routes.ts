import { FastifyInstance } from 'fastify';
import AlocacaoController from './controller';

export default async function AlocacoesRoutes (app: FastifyInstance) {
  app.get('/alocacoes', AlocacaoController.findAll);
  app.post('/alocacoes', AlocacaoController.create);
  app.put('/alocacoes/:id', AlocacaoController.update);
  app.delete('/alocacoes/:id', AlocacaoController.delete);
}
