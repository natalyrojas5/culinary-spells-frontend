import { z } from "zod";

export const SchemaAddStepRecipe = z
  .object({
    orderStep: z
      .string()
      .min(1, { message : 'El número de orden es requerido'})
      .regex(/^\d+$/, { message: "Debe ser un número válido" })
      .transform((val) => Number(val)),
    detailStep: z
      .string()
      .min(1, { message : 'La descripción del paso es requerido'}),
  })

