import { API } from "@/modules/core/utils";
import { IGetRecipeResponse, IGetRecipeSuccessResponse } from "../interfaces";

export const getRecipe = async (id: number): Promise<IGetRecipeResponse> => {
  try {
    const { data: dataAxios } = await API.get(`recipe/${id}`);

    const { message, data } = dataAxios as IGetRecipeSuccessResponse;
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
