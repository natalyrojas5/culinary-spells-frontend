import { IResponseAPI } from "@/modules/core/interfaces";

export interface IAddRecipeLikeSuccessResponse extends IResponseAPI {
  data: {
    idLike: number;
    count: number;
  };
}

export interface IAddRecipeLikeResponse {
  isOk: boolean;
  message: string;
}
