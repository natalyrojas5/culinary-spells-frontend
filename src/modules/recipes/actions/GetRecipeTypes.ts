import { API } from "@/modules/core/utils";
import {
  IGetRecipeTypesResponse,
  IGetRecipeTypesSuccessResponse,
} from "../interfaces";

export const getRecipeTypes = async (): Promise<IGetRecipeTypesResponse> => {
  try {
    const { data: dataAxios } = await API.get("recipetypes");
    const { message, data } = dataAxios as IGetRecipeTypesSuccessResponse;
    console.log("message", message);
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
