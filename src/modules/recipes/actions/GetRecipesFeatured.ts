import { API } from "@/modules/core/utils";
import {
  IGetRecipesFeaturedResponse,
  IGetRecipesFeaturedSuccessResponse,
} from "../interfaces";

export const getRecipesFeatured =
  async (): Promise<IGetRecipesFeaturedResponse> => {
    try {
      const { data: dataAxios } = await API.get("recipe/top-recipes");
      const { message, data } = dataAxios as IGetRecipesFeaturedSuccessResponse;
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
