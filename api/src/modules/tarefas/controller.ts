import { FastifyRequest, FastifyReply } from 'fastify';
import { TarefaDTO, TarefaSchema } from './schemas/create';
import { TarefaUpdateSchema } from './schemas/update';
import TarefaService from './services';

class TarefaController {
  async findAll(_req: FastifyRequest, reply: FastifyReply) {
    try {
      const tarefas = await TarefaService.findAll();
      reply.send(tarefas);
    } catch (error) {
      reply.status(500).send({ message: error });
    }
  }

  async create(
    request: FastifyRequest<{ Body: TarefaDTO }>,
    reply: FastifyReply
  ) {
    try {
      const dto = TarefaSchema.parse(request.body);
      const nova = await TarefaService.create(dto);
      reply.code(201).send(nova);
    } catch (error: any) {
      reply.status(500).send({ message: error.message });
    }
  }

  async update(
    request: FastifyRequest<{ Params: { id: string }; Body: Partial<TarefaDTO> }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      const dto = TarefaUpdateSchema.parse(request.body);
      const atualizada = await TarefaService.update(id, dto);
      reply.send(atualizada);
    } catch (error) {
      reply.status(500).send({ message: error });
    }
  }

  async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      await TarefaService.delete(id);
      reply.status(200).send();
    } catch (error) {
      reply.status(500).send({ message: error });
    }
  }
}

export default new TarefaController();
