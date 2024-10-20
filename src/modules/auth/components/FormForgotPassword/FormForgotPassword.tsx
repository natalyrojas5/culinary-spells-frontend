"use client";

import { InputWithLabel } from "@/modules/core/components";
import { PATH } from "@/modules/auth/constants";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger, fontMonomaniacOne } from "@/modules/core/utils";
import { useRouter } from "next/navigation";
import { useForgotPassword } from "../../hooks";

export const FormForgotPassword = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  const router = useRouter();
  const { forgotPassword, handleChange, values } = useForgotPassword();
  return (
    <form
      className="flex flex-col gap-4 items-center w-[500px] mx-auto mt-8"
      onSubmit={forgotPassword}
    >
      <InputWithLabel
        label="Correo electrónico"
        name="email"
        type="email"
        placeholder="Ingresa tu correo electrónico"
        onChange={handleChange}
        value={values.email}
      />
      <button
        type="button"
        className={`${fontMonomaniacOne.className} c-txt-golden-yellow text-3xl underline`}
        onClick={() => router.push(`/${PATH.login}`)}
      >
        Recordé mi contraseña
      </button>
      <button
        type="submit"
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-8`}
      >
        Solicitar Nueva Contraseña
      </button>
    </form>
  );
};
