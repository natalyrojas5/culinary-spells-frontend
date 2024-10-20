/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from "@/modules/core/utils";
import { ICreateRecipeResponse } from "../interfaces";

export const CreateRecipe = async (formData: FormData): Promise<ICreateRecipeResponse> => {
    try {
    const { data: dataAxios } = await API.post("recipe", formData,{
      headers:{
        'Content-type' : 'multipart/form-data'
      }
    });
    const { message, data } = dataAxios;
    return {
      isOk: message === "success",
      data,
    };
  } catch (error) {
    console.error('Response data:', error);
    return {
      isOk: false,
      data: [],
    };
  }
};
