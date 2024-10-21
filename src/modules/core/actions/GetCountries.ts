import { API } from "@/modules/core/utils";
import { IGetContries } from "@/modules/core/interfaces";

export const getCountriesService = async () => {
  try {
    const { data: dataAxios } = await API.get("country");
    let { message, data } = dataAxios as IGetContries;

    return {
      isOk: message === "success",
      data,
    };
  } catch (error) {
    console.log(error);
  }
};
