import { API } from "@/modules/core/utils";
import { IGetRecipesResponse, IGetRecipesSuccessResponse } from "../interfaces";

export const getRecipes = async (): Promise<IGetRecipesResponse> => {
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
