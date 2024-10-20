import { z } from "zod";

export const SchemaRegisterUser = z
  .object({
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .regex(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
      .regex(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
      .regex(/[0-9]/, 'La contraseña debe contener al menos un número')
      .regex(/[\W_]/, 'La contraseña debe contener al menos un carácter especial'),
    email: z.string().email("El email no es válido"),
    name: z.string().min(1, "El nombre es obligatorio"),
    lastname: z.string().optional(),

    idCountry: z.string().min(1, "El país es obligatorio"),
    repeat_password: z
      .string()
      .min(
        6,
        "La repetición de la contraseña debe tener al menos 6 caracteres"
      ),
  })
  .refine((data) => data.password === data.repeat_password, {
    message: "Las contraseñas no coinciden",
    path: ["repeat_password"],
  });
