import { IResponseAPI } from "@/modules/core/interfaces";
import { IDetailRecipe } from ".";

export interface IGetRecipesFeaturedSuccessResponse extends IResponseAPI {
  data: IDetailRecipe[];
}

export interface IGetRecipesFeaturedResponse {
  isOk: boolean;
  data: IDetailRecipe[];
}
