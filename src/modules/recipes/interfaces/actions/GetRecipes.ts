import { IResponseAPI } from "@/modules/core/interfaces";

interface IRecipeImage {
  idImage: number;
  link: string;
}
export interface IRecipe {
  name: string;
  detail: string;
  images: IRecipeImage[];
  score: number;
}

export interface IGetRecipesSuccessResponse extends IResponseAPI {
  data: IRecipe[];
}
