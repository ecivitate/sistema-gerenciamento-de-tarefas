import { FastifyInstance } from 'fastify';
import TarefaController from './controller';

export default async function TarefasRoutes (app: FastifyInstance) {
  app.get('/tarefas', TarefaController.findAll);
  app.post('/tarefas', TarefaController.create);
  app.put('/tarefas/:id', TarefaController.update);
  app.delete('/tarefas/:id', TarefaController.delete);
}