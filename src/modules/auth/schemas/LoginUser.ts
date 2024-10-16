import { z } from "zod";

export const SchemaLoginUser = z.object({
  password: z.string().min(6, "La contraseña es requerido"),
  email: z.string().email("El email no es válido"),
});
