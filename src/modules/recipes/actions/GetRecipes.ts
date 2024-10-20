import { API } from "@/modules/core/utils";
import { IGetRecipesSuccessResponse } from "../interfaces";


export const getRecipes = async () => {
  try {
    const { data: dataAxios } = await API.get("recipe/all");
    const { message, data } = dataAxios as IGetRecipesSuccessResponse;
    return {
      isOk: message === "success",
      data: data,
    };
  } catch (error) {
    console.log(error);
  }
};
