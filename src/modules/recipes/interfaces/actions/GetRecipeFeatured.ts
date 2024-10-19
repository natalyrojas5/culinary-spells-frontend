import { IResponseAPI } from "@/modules/core/interfaces";
import { IDetailRecipe } from ".";

export interface IGetRecipeFeaturedSuccessResponse extends IResponseAPI {
  data: IDetailRecipe[];
}

export interface IGetRecipeFeaturedResponse {
  isOk: boolean;
  data: IDetailRecipe[];
}
