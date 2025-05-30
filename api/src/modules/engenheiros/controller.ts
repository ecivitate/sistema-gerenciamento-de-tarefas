import { FastifyRequest, FastifyReply } from 'fastify';
import {
  EngenheiroDTO,
  EngenheiroSchema
} from './schemas/create';
import { EngenheiroUpdateSchema } from './schemas/update';
import EngenheiroService from './service';

class EngenheiroController {
  async findAll(_req: FastifyRequest, reply: FastifyReply) {
    try {
      const engenheiros = await EngenheiroService.findAll();
      reply.send(engenheiros);
    } catch (error) {
      reply.status(500).send({ message: error });
    }
  }




  async create(
    request: FastifyRequest<{ Body: EngenheiroDTO }>,
    reply: FastifyReply
  ) {
    try {
      const dto = EngenheiroSchema.parse(request.body);
      const novo = await EngenheiroService.create(dto);
      reply.code(201).send(novo);
    } catch (error: any) {
      reply.status(500).send({ message: error.message });
    }
  }

  async update(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<EngenheiroDTO>;
    }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      const dto = EngenheiroUpdateSchema.parse(request.body);
      const atualizado = await EngenheiroService.update(id, dto);
      reply.send(atualizado);
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
      await EngenheiroService.delete(id);
      reply.status(200).send();
    } catch (error) {
      reply.status(500).send({ message: error });
    }
  }
}

export default new EngenheiroController();
