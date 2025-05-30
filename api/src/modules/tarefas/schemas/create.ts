import { z } from 'zod';

export const TarefaSchema = z.object({
  titulo: z.string().min(3),
  prioridade: z.enum(['Alta', 'Média', 'Baixa']),
  horas_estimadas: z.number().positive(),
  status: z
    .enum(['Pendente', 'Em andamento', 'Concluída'])
    .default('Pendente')
});

export type TarefaDTO = z.infer<typeof TarefaSchema>;
