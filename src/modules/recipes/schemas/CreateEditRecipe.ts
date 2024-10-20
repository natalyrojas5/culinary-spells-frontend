import { z } from "zod";

// const imageSchema = z.instanceof(Blob);

const stepsSchema = z.object({
  name : z.string(),
  detail : z.string(),
  orderNum : z.string()
})


const recipeSchema = z.object({
  name: z
    .string()
    .min(10, 'La receta debe tener al menos 10 caractéres'),
  // recipeTypes: z.string().min(1, "El tipo de receta es obligatorio"),
  cookingTime: z.string().regex(/^\d+$/, { message: "Debe ser un número válido" })
    .transform((val) => Number(val)),
  steps: z.array(stepsSchema)
    .min(1,'Debe al menos subir un paso de preparación')
});

export const SchemaCreateEditRecipe = z.object({
  recipe: recipeSchema,
  // majorImageIndex: z.string(), // Si es un número, usa z.number()
  // images: z.array(imageSchema)
    // .min(1,'Debe al menos subir la imagen principal'),
});