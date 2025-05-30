import { z } from 'zod';

export const ExemploUpdateSchema = z.object({
  titulo: z.string().max(100).optional(),
  descricao: z.string().optional(),
  status: z.string().max(20).optional(),
  tempo_estimado: z.number().optional(),
});

export type ExemploUpdateDTO = z.infer<typeof ExemploUpdateSchema>;
