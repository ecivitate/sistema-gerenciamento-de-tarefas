import Fastify from 'fastify';
const app = Fastify({ logger: true });

app.get('/health', async () => ({ status: 'ok' }));

app.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log('API pronta em', address);
});
