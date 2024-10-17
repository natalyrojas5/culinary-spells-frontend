import { z } from "zod";

export const formatErrors = (errors: z.ZodIssue[]) => {
  return errors.map((error) => {
    return {
      campo: error.path.join("."),
      mensaje: error.message,
    };
  });
};
