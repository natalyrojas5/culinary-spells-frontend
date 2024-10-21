"use server";

import { API } from "@/modules/core/utils";
import { revalidatePath } from "next/cache";
import { PATH } from "../constants";

export const removeRecipeService = async (id: number) => {
  try {
    const { status } = await API.delete(`recipe/${id}`);
    const isOk = status === 200;
    if (isOk) {
      revalidatePath(`/${PATH.myRecipes}`, "page");
    }
    return {
      isOk,
      message: isOk
        ? "Se removió receta con éxito"
        : "Hubo un error al intentar remover receta",
    };
  } catch (error) {
    console.error(error);
    return {
      isOk: false,
      message: "Ocurrió un error al procesar la solicitud.",
    };
  }
};
