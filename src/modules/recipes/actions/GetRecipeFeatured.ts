import { API } from "@/modules/core/utils";
import {
  IGetRecipeFeaturedResponse,
  IGetRecipeFeaturedSuccessResponse,
} from "../interfaces";

export const getRecipeFeatured =
  async (): Promise<IGetRecipeFeaturedResponse> => {
    try {
      const { data: dataAxios } = await API.get("recipe/top-recipe");
      const { message, data } = dataAxios as IGetRecipeFeaturedSuccessResponse;
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
