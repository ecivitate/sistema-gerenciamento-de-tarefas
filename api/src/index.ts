import fastify from 'fastify';
import dotenv  from 'dotenv';
import EngenheiroRoutes from './modules/engenheiros/routes';
import TarefaRoutes     from './modules/tarefas/routes';
import AlocacaoRoutes   from './modules/alocacoes/routes';

dotenv.config();

const app = fastify();

app.register(EngenheiroRoutes);
app.register(TarefaRoutes);
app.register(AlocacaoRoutes);

app.listen({ port: 3333, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
