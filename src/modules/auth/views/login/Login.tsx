"use client";
import { fontMonomaniacOne } from "@/modules/core/utils";
import { FormLogin } from "@/modules/auth/components";
import { useRouter } from "next/navigation";
import { PATH } from "@/modules/auth/constants";

export const ViewLogin = () => {
  const router = useRouter();
  return (
    <section className="text-center">
      <header
        className={`${fontMonomaniacOne.className} flex flex-col items-center gap-2 mb-4`}
      >
        <h1 className="text-5xl text-white">Inicio de Sesión</h1>
        <button
          onClick={() => router.push(PATH.createAccount)}
          className="c-txt-golden-yellow text-3xl underline"
        >
          Crear cuenta
        </button>
      </header>

      <FormLogin />
    </section>
  );
};
