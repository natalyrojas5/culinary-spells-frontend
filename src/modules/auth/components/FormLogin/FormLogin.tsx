import { InputPassword, InputWithLabel } from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger, fontMonomaniacOne } from "@/modules/core/utils";

export const FormLogin = () => {
  const {
    orange: { size, type },
  } = BUTTON;
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
        name="email"
        placeholder="Ingresa tu contraseña"
      />

      <button
        type="button"
        className={`${fontMonomaniacOne.className} c-txt-orange text-3xl underline`}
      >
        Olvidé mi Contraseña
      </button>
      <button
        type="button"
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-8`}
      >
        Iniciar Sesión
      </button>
    </form>
  );
};
