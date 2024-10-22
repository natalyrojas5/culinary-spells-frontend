"use server";

import { API } from "@/modules/core/utils";
import {
  IAddRecipeLikeResponse,
  IAddRecipeLikeSuccessResponse,
} from "../interfaces";
import { revalidatePath } from "next/cache";
import { PATH } from "../constants";

export const addRecipeLikeService = async (
  id: number
): Promise<IAddRecipeLikeResponse> => {
  try {
    const { data: dataAxios } = await API.post(`like/${id}`);

    const { message } = dataAxios as IAddRecipeLikeSuccessResponse;

    const isOk = message === "success";
    if (isOk) {
      revalidatePath(`/${PATH.recipeDetail}/${id}`, "page");
    }
    return {
      isOk,
      message: isOk
        ? "Se agregó destacado con éxito"
        : "Hubo un error al intentar agregar destacado",
    };
  } catch (error) {
    console.error(error);
    return {
      isOk: false,
      message: "Ocurrió un error al procesar la solicitud.",
    };
  }
};
