import { z } from 'zod';

export const AlocacaoSchema = z.object({
  id_tarefa: z.string().uuid(),
  id_eng:    z.string().uuid(),
  horas_atribuidas: z.number().positive()
});

export type AlocacaoDTO = z.infer<typeof AlocacaoSchema>;
