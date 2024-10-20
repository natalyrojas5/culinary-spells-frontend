import { IResponseAPI } from "@/modules/core/interfaces";

interface IRecipeImage {
  idImage: number;
  link: string;
}
export interface IRecipe {
  name: string;
  detail: string;
  images: IRecipeImage[];
  count: number;
  idRecipe: number;
  isLike?: boolean;
}

export interface IGetRecipesSuccessResponse extends IResponseAPI {
  data: IRecipe[];
}

export interface IGetRecipesResponse {
  isOk: boolean;
  data: IRecipe[];
}
