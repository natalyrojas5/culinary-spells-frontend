import { API } from "@/modules/core/utils";
import { IGetContries } from "@/modules/core/interfaces";


export const getCountries = async () => {
  try {
    const { data: dataAxios } = await API.get("country");
    let { message, data } = dataAxios as IGetContries;

    return {
      isOk: message === "success",
      data: data,
    };
  } catch (error) {
    console.log(error);
  }
};
