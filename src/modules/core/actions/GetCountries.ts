import { API } from "@/modules/core/utils";
import {
  IGetContriesSuccess,
  IGetCountriesResponseSuccess,
} from "@/modules/core/interfaces";

export const getCountriesService =
  async (): Promise<IGetCountriesResponseSuccess> => {
    try {
      const { data: dataAxios } = await API.get("country");
      const { message, data } = dataAxios as IGetContriesSuccess;

      return {
        isOk: message === "success",
        data,
      };
    } catch (error) {
      console.log(error);
      return {
        isOk: false,
        data: [],
      };
    }
  };
