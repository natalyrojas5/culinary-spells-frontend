import { fontMonomaniacOne } from "@/modules/core/utils";
import { FormNewPassword, ModalPasswordCreated } from "@/modules/auth/components";

export const ViewNewPassword = () => {
  return (
    <>
      <section className="text-center">
        <header
          className={`${fontMonomaniacOne.className} flex flex-col items-center gap-2 mb-4`}
        >
          <h1 className="text-5xl text-white">Nueva Contraseña</h1>
        </header>
        <FormNewPassword />
      </section>
      <ModalPasswordCreated />
    </>
  );
};
