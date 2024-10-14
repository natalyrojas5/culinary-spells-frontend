import { fontMonomaniacOne } from "@/modules/core/utils";
import { FormLogin } from "@/modules/auth/components";

export const ViewLogin = () => {
  return (
    <section className="text-center">
      <header
        className={`${fontMonomaniacOne.className} flex flex-col items-center gap-2 mb-4`}
      >
        <h1 className="text-5xl text-white">Inicio de Sesión</h1>
        <button className="c-txt-golden-yellow text-3xl underline">
          Crear cuenta
        </button>
      </header>

      <FormLogin />
    </section>
  );
};
