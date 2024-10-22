import { IResponseAPI } from "..";

export interface ICountry {
  idCountry: number;
  niceName: string;
  iso3: string;
}
export interface IGetContriesSuccess extends IResponseAPI {
  data: ICountry[];
}

export interface IGetCountriesResponseSuccess {
  isOk: boolean;
  data: ICountry[];
}
