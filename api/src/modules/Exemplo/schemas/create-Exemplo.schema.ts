import { z } from 'zod';

export const ExemploSchema = z.object({
  titulo: z.string().max(100),
  descricao: z.string().optional(),
  status: z.string().max(20),
  tempo_estimado: z.number().optional(),
});

export type ExemploDTO = z.infer<typeof ExemploSchema>;