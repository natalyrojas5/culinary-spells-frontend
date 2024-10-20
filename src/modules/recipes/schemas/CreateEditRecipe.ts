import { z } from "zod";

const imageSchema = z.object({
  blob: z.instanceof(Blob), // Validar que sea una instancia de Blob
});

const recipeSchema = z.object({
  name: z
    .string()
    .min(10, 'La receta debe tener al menos 10 caractéres'),
  recipeTypes: z.string().min(1, "El tipo de receta es obligatorio"),
  cookingTime: z.string().regex(/^\d+$/, { message: "Debe ser un número válido" })
    .transform((val) => Number(val)),
  images: z.array(imageSchema).nonempty().
    min(1,'Debe al menos subir la imagen principal')
});

export const SchemaCreateEditRecipe = z.object({
  recipe: recipeSchema,
  majorImageIndex: z.string(), // Si es un número, usa z.number()
});