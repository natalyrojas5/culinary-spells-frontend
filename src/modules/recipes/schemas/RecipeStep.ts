import { z } from "zod";

export const SchemaStep = z.object({
  detail: z
    .string()
    .min(1, { message: "La descripción del paso es obligatorio." }),
  orderNum: z.string().min(1, { message: "La orden del paso es obligatorio." }),
});
