import { FastifyRequest, FastifyReply } from 'fastify';
import  { ExemploDTO, ExemploSchema } from './schemas/create-Exemplo.schema';
import { ExemploUpdateSchema } from './schemas/update-Exemplo.schema';  
import ExemploService from './Exemplo.service';


class ExemploController{
    async findAll(request: FastifyRequest, reply: FastifyReply) {
        try {
          const exemplos = await ExemploService.findAll();
          reply.send(exemplos);
        } catch (error) {
          reply.status(500).send({ message: error });
        }
      }


      async create(request: FastifyRequest<{ Body: ExemploDTO }>, reply: FastifyReply) {
        try {
          console.log("Request body recebido:", request.body);
          const createExemploDto = ExemploSchema.parse(request.body);
          const newExemplo = await ExemploService.create(createExemploDto);
          reply.code(201).send(newExemplo);
        } catch (error: any) {
          console.error("Erro ao criar o Exemplo:", error);
          reply.status(500).send({ message: error.message || "Erro interno do servidor" });
        }
      }

      async update(request: FastifyRequest<{ Params: { id: string }; Body: Partial<ExemploDTO> }>, reply: FastifyReply) {
        try {
          const { id } = request.params;
          const updateExemploDto = ExemploUpdateSchema.parse(request.body);  
          const updatedExemplo = await ExemploService.update(id, updateExemploDto);
          reply.send(updatedExemplo);
          
        } catch (error) {
          
          reply.status(500).send({ message: error });
          console.log("update: ", error);
    
        }
      }
    
      async delete(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        const { id } = request.params;
        try {
          await ExemploService.delete(id);
          reply.status(200).send();
        } catch (error) {
          reply.status(500).send({ message: error });
        }
      }
}


export default new ExemploController();