import { API } from "@/modules/core/utils";
import { IGetRecipesResponse, IGetRecipesSuccessResponse } from "../interfaces";

<<<<<<< HEAD

export const getRecipes = async () => {
=======
export const getRecipesServices = async (): Promise<IGetRecipesResponse> => {
>>>>>>> 441460743e7952c08841c7b8bf9fb58a4dd54eb7
  try {
    const { data: dataAxios } = await API.get("recipe/all");
    const { message, data } = dataAxios as IGetRecipesSuccessResponse;
    return {
      isOk: message === "success",
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      isOk: false,
      data: [],
    };
  }
};
