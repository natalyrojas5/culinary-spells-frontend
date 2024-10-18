import { IResponseAPI } from "@/modules/core/interfaces";

interface IStep {
  idStep: number;
  name: string;
  detail: string;
  orderNum: number;
}
export interface IDetailRecipe {
  idRecipe: number;
  name: string;
  detail: string;
  score: number;
  cookingTime: string;
  recipeTypes: number;
  user: {
    idUser: number;
    email: string;
    password: string;
    name: string;
    lastname: string;
    idCountry: number;
  };
  steps: IStep[];
}

export interface IGetRecipeSuccessResponse extends IResponseAPI {
  data: IDetailRecipe[];
}

export interface IGetRecipeResponse {
  isOk: boolean;
  data: IDetailRecipe[];
}
