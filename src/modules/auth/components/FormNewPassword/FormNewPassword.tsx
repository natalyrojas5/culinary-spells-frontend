"use client";

import { InputPassword } from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { useNewPassword } from "../../hooks";

export const FormNewPassword = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;

  const { generateNewPassword, values, handleChange } = useNewPassword();
  return (
    <form
      className="flex flex-col gap-4 items-center w-[500px] mx-auto mt-8"
      onSubmit={generateNewPassword}
    >
      <InputPassword
        label="Nueva Contraseña"
        name="password"
        placeholder="Ingresa tu nueva contraseña"
        onChange={handleChange}
        value={values.password}
      />
      <InputPassword
        label="Repetir Contraseña"
        name="repeat_password"
        onChange={handleChange}
        placeholder="Ingresa nuevamente tu nueva contraseña"
        value={values.repeat_password}
      />
      <button
        type="submit"
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-8`}
      >
        Crear contraseña
      </button>
    </form>
  );
};
