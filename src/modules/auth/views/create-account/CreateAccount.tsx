"use client";

import { fontMonomaniacOne } from "@/modules/core/utils";
import { FormCreateAccount } from "@/modules/auth/components";
import { useRouter } from "next/navigation";
import { PATH } from "@/modules/auth/constants";

export const ViewCreateAccount = () => {
  const router = useRouter();
  return (
    <section className="text-center">
      <header
        className={`${fontMonomaniacOne.className} flex flex-col items-center gap-2 mb-4`}
      >
        <h1 className="text-5xl text-white">Registro de Cuenta </h1>
        <button
          onClick={() => router.push(PATH.login)}
          className="c-txt-golden-yellow text-3xl underline"
        >
          Iniciar Sesión
        </button>
      </header>

      <FormCreateAccount />
    </section>
  );
};
