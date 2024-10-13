"use client";

import { fontMonomaniacOne } from "@/modules/core/utils";
import { FormForgotPassword } from "@/modules/auth/components";

export const ViewForgotPassword = () => {
  return (
    <section className="text-center">
      <header
        className={`${fontMonomaniacOne.className} flex flex-col items-center gap-2 mb-4`}
      >
        <h1 className="text-5xl text-white">Olvide Contraseña</h1>
      </header>

      <FormForgotPassword />
    </section>
  );
};
