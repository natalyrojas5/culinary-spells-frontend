"use server";

import { API } from "@/modules/core/utils";
import { revalidatePath } from "next/cache";
import { PATH } from "../constants";

export const removeRecipeLikeService = async (id: number) => {
  try {
    const { status } = await API.delete(`like/${id}`);
    const isOk = status === 204;
    if (isOk) {
      revalidatePath(`/${PATH.recipeDetail}/${id}`, "page");
    }
    return {
      isOk,
      message: isOk
        ? "Se removió destacado con éxito"
        : "Hubo un error al intentar remover desctado",
    };
  } catch (error) {
    console.error(error);
    return {
      isOk: false,
      message: "Ocurrió un error al procesar la solicitud.",
    };
  }
};
