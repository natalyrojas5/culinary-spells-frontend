import { API } from "@/modules/core/utils";
import { IRegisterRequest, IRegisterResponse } from "@/modules/auth/interfaces";

export const registerService = async (
  user: IRegisterRequest
): Promise<IRegisterResponse> => {
  try {
    const { status, data } = await API.post("register", user);

    const isOk = status === 201;

    return {
      isOk,
      message: isOk
        ? "Usuario creado correctamente"
        : data?.message
        ? data?.message
        : "Ocurrío un error al crear el usuario",
    };
  } catch (error) {
    console.error(error);
    return {
      isOk: false,
      message: "Ocurrío un error al crear el usuario",
    };
  }
};
