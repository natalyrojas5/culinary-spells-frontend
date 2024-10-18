import { API } from "@/modules/core/utils";
import { IGetRecipeSuccessResponse } from "../interfaces";

export const getRecipe = async (id: number) => {
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
