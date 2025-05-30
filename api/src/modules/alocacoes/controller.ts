import { FastifyRequest, FastifyReply } from 'fastify';
import {
  AlocacaoDTO,
  AlocacaoSchema
} from './schemas/create';
import { AlocacaoUpdateSchema } from './schemas/update';
import AlocacaoService from './services';

class AlocacaoController {
  async findAll(_req: FastifyRequest, reply: FastifyReply) {
    try {
      const alocacoes = await AlocacaoService.findAll();
      reply.send(alocacoes);
    } catch (error) {
      reply.status(500).send({ message: error });
    }
  }

  async create(
    request: FastifyRequest<{ Body: AlocacaoDTO }>,
    reply: FastifyReply
  ) {
    try {
      const dto = AlocacaoSchema.parse(request.body);
      const nova = await AlocacaoService.create(dto);
      reply.code(201).send(nova);
    } catch (error: any) {
      reply.status(500).send({ message: error.message });
    }
  }

  async update(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<AlocacaoDTO>;
    }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      const dto = AlocacaoUpdateSchema.parse(request.body);
      const atualizada = await AlocacaoService.update(id, dto);
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
      await AlocacaoService.delete(id);
      reply.status(200).send();
    } catch (error) {
      reply.status(500).send({ message: error });
    }
  }
}

export default new AlocacaoController();
