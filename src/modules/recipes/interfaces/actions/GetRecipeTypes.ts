import { IResponseAPI } from "@/modules/core/interfaces";

interface IRecipeType {
  idRecipeType: number;
  name: string;
  detail: string;
}

export interface IGetRecipeTypesSuccessResponse extends IResponseAPI {
  data: IRecipeType[];
}

export interface IGetRecipeTypesResponse {
  isOk: boolean;
  data: IRecipeType[];
}
