import { API } from "@/modules/core/utils";
import { IGetRecipesResponse, IGetRecipesSuccessResponse } from "../interfaces";

export const getMyRecipes = async (): Promise<IGetRecipesResponse> => {
  try {
    const { data: dataAxios } = await API.get("recipe/all/own");
    const { message, data } = dataAxios as IGetRecipesSuccessResponse;
    return {
      isOk: message === "success",
      data,
    };
  } catch (error) {
    console.error(error);
    return {
      isOk: false,
      data: [],
    };
  }
};
