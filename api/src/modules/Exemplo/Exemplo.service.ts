import prisma from "../../clients/prisma.client";
import { ExemploDTO } from "./schemas/create-Exemplo.schema";
import { ExemploUpdateDTO } from "./schemas/update-Exemplo.schema";

class ExemploService {
  async findAll() {
    try {
      return await prisma.exemplos.findMany();
    } catch (error) {
      throw new Error("Falha ao recuperar os exemplos");
    }
  }

  async create(createExemplodDto: ExemploDTO) {
    try {
      console.log("Dados enviados ao Prisma:", createExemplodDto);
      return await prisma.exemplos.create({
        data: createExemplodDto,
      });
    } catch (error) {
      console.error("Erro no Prisma:", (error as any).message, error);
      throw new Error("Falha ao criar o exemplo");
    }
  }

  async update(id: string, updateExemploDto: ExemploUpdateDTO) {
    console.log(id);
    
    try {
      return await prisma.exemplos.update({
        where: { id },
        data: updateExemploDto,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Falha ao atualizar o exemplo");
      
    }
  }

  async delete(id: string) {
    try {
      return await prisma.exemplos.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error("Falha ao deletar o exemplo");
    }
  }
  
}


export default new ExemploService();