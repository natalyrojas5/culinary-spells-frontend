"use client";

import Link from "next/link";
import { InputPassword, InputWithLabel } from "@/modules/core/components";
import { PATH } from "@/modules/auth/constants";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger, fontMonomaniacOne } from "@/modules/core/utils";
import { useLogin } from "@/modules/auth/hooks";

export const FormLogin = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;

  const { login, handleChange, values } = useLogin();

  return (
    <form
      className="flex flex-col gap-4 items-center w-[500px] mx-auto mt-8"
      onSubmit={login}
    >
      <InputWithLabel
        label="Correo electrónico"
        name="email"
        type="email"
        placeholder="Ingresa tu correo electrónico"
        onChange={handleChange}
        value={values.email}
      />
      <InputPassword
        label="Contraseña"
        name="password"
        placeholder="Ingresa tu contraseña"
        onChange={handleChange}
        value={values.password}
      />

      <Link
        type="button"
        className={`${fontMonomaniacOne.className} c-txt-golden-yellow text-3xl underline`}
        href={`/${PATH.forgotPassword}`}
      >
        Olvidé mi contraseña
      </Link>
      <button
        type="submit"
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-8`}
      >
        Iniciar sesión
      </button>
    </form>
  );
};
