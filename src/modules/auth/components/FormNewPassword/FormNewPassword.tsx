import { InputPassword } from "@/modules/core/components";
import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";

export const FormNewPassword = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;
  return (
    <form className="flex flex-col gap-4 items-center w-[500px] mx-auto mt-8">
      <InputPassword
        label="Nueva Contraseña"
        name="password"
        placeholder="Ingresa tu nueva contraseña"
      />
      <InputPassword
        label="Repetir Contraseña"
        name="repeat_password"
        placeholder="Ingresa nuevamente tu nueva contraseña"
      />
      <button
        type="button"
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-8`}
      >
        Crear contraseña
      </button>
    </form>
  );
};
