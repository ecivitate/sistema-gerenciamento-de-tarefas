import { z } from 'zod';

export const EngenheiroSchema = z.object({
  nome: z.string().min(3),
  eficiencia: z
    .number()
    .int()
    .min(0)
    .max(100)
    .default(100)                     // guardamos em %
});

export type EngenheiroDTO = z.infer<typeof EngenheiroSchema>;