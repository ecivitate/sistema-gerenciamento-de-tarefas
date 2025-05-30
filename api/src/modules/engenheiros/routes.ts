import { FastifyInstance } from 'fastify';
import EngenheiroController from './controller';

export default async function EngenheirosRoutes (app: FastifyInstance) {
  app.get('/engenheiros', EngenheiroController.findAll);
  app.post('/engenheiros', EngenheiroController.create);
  app.put('/engenheiros/:id', EngenheiroController.update);
  app.delete('/engenheiros/:id', EngenheiroController.delete);
}


