"use client";

import { useRouter } from "next/navigation";
import { InputPassword, InputWithLabel } from "@/modules/core/components";
import { PATH } from "@/modules/auth/constants";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger, fontMonomaniacOne } from "@/modules/core/utils";

export const FormLogin = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  const router = useRouter();
  return (
    <form className="flex flex-col gap-4 items-center w-[500px] mx-auto mt-8">
      <InputWithLabel
        label="Correo electrónico"
        name="email"
        type="email"
        placeholder="Ingresa tu correo electrónico"
      />
      <InputPassword
        label="Contraseña"
        name="password"
        placeholder="Ingresa tu contraseña"
      />

      <button
        type="button"
        className={`${fontMonomaniacOne.className} c-txt-golden-yellow text-3xl underline`}
        onClick={() => router.push(PATH.forgotPassword)}
      >
        Olvidé mi contraseña
      </button>
      <button
        type="button"
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-8`}
      >
        Iniciar sesión
      </button>
    </form>
  );
};
