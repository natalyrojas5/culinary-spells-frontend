import { API } from "@/modules/core/utils";
import { IForgotPasswordRequest, IForgotPasswordResponse } from "../interfaces";

export const forgotPasswordService = async ({
  email,
}: IForgotPasswordRequest): Promise<IForgotPasswordResponse> => {
  try {
    const { status } = await API.post("password/send-email", {
      mailTo: email,
    });

    const isOk = status === 200;

    return {
      isOk,
      message: isOk
        ? "El correo se ha enviado correctamente"
        : "No se pudo enviar el correo. Por favor, intenta nuevamente.",
    };
  } catch (error) {
    console.error(error);
    return {
      isOk: false,
      message: "Hubo un error al enviar el correo",
    };
  }
};
