"use client";

import { InputWithLabel } from "@/modules/core/components";
import { BUTTON, PATH } from "@/modules/core/constants";
import { fontJollyLodger, fontMonomaniacOne } from "@/modules/core/utils";
import { useRouter } from "next/navigation";

export const ViewForgotPassword = () => {
  const {
    orange: { size, type },
  } = BUTTON;
  const router = useRouter();
  return (
    <section className="text-center">
      <header
        className={`${fontMonomaniacOne.className} flex flex-col items-center gap-2 mb-4`}
      >
        <h1 className="text-5xl text-white">Olvide Contraseña</h1>
      </header>

      <form className="flex flex-col gap-4 items-center w-[500px] mx-auto mt-8">
        <InputWithLabel
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="Ingresa tu correo electrónico"
        />
        <button
          type="button"
          className={`${fontMonomaniacOne.className} c-txt-orange text-3xl underline`}
          onClick={() => router.push(PATH.login)}
        >
          Recordé mi contraseña
        </button>
        <button
          type="button"
          className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-8`}
        >
          Solicitar Nueva Contraseña
        </button>
      </form>
    </section>
  );
};
