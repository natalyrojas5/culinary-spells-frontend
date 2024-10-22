import { API } from "@/modules/core/utils";
import { INewPasswordRequest } from "../interfaces";

export const newPasswordService = async ({
  password,
  repeat_password,
  token,
}: INewPasswordRequest) => {
  try {
    const { status } = await API.post("password/change-password", {
      password,
      confirmPassword: repeat_password,
      tokenPassword: token,
    });
    const isOk = status === 200;
    return {
      isOk,
      message: isOk
        ? "La contraseña se ha cambiado con éxito"
        : "No se pudo cambiar la contraseña. Por favor, inténtalo de nuevo.",
    };
  } catch (error) {
    console.error(error);
    return {
      isOk: false,
    };
  }
};
