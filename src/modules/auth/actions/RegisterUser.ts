import { API } from "@/modules/core/utils";

export const registerUser = async () => {
  try {
    const { data: dataAxios } = await API.get("register");
    //   const { message, data } = dataAxios as IGetRecipesSuccessResponse;
    //   return {
    //     isOk: message === "success",
    //     data: data,
    //   };
  } catch (error) {
    console.log(error);
  }
};
