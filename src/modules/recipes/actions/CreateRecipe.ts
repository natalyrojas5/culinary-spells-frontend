"use server";
import { API } from "@/modules/core/utils";
import { ICreateRecipeResponse } from "../interfaces";

export const CreateRecipe = async (
  formData: FormData
): Promise<ICreateRecipeResponse> => {
  try {
    const { data: dataAxios } = await API.post("recipe", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const { message, data } = dataAxios;
    return {
      isOk: message === "success",
      data,
    };
  } catch (error) {
    console.log(error)
    return {
      isOk: false,
      data: [],
    };
  }
};
