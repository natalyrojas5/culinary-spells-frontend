import { IResponseAPI } from "..";

export interface ICountry {
  idCountry: number;
  niceName: string;
  iso3: string;
}
export interface IGetContries extends IResponseAPI {
  data: ICountry[];
}
