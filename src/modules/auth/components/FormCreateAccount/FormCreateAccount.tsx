"use client";

import { InputPassword, InputWithLabel } from "@/modules/core/components";
import { SelectWithLabel } from "@/modules/core/components/SelectWithLabel";
import { BUTTON, SELECT_GENDER } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { useRegisterUser } from "@/modules/auth/hooks";

interface IProps {
  countries: Array<{ value: number; text: string }>;
}

export const FormCreateAccount = ({ countries }: IProps) => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;

  const { handleChange, register, isLoading, values } = useRegisterUser();
  return (
    <form
      className="flex flex-col gap-4 items-center w-[500px] mx-auto mt-8"
      onSubmit={register}
    >
      <InputWithLabel
        label="Nombres*"
        name="name"
        type="text"
        placeholder="Ingresa tus nombres"
        required
        value={values?.name || ""}
        onChange={handleChange}
      />
      <InputWithLabel
        label="Apellidos (opcional)"
        name="lastname"
        onChange={handleChange}
        type="text"
        value={values?.lastname || ""}
        placeholder="Ingresa tus apellidos"
      />
      <InputWithLabel
        label="Correo electrónico"
        name="email"
        type="email"
        value={values?.email || ""}
        onChange={handleChange}
        placeholder="Ingresa tu correo electrónico"
        required
      />
      <InputPassword
        label="Contraseña"
        name="password"
        onChange={handleChange}
        value={values?.password || ""}
        placeholder="Ingresa tu contraseña"
        required
      />
      <InputPassword
        label="Repetir Contraseña"
        name="repeat_password"
        value={values?.repeat_password || ""}
        onChange={handleChange}
        placeholder="Ingresa tu contraseña"
        required
      />
      <SelectWithLabel
        label="Género"
        options={SELECT_GENDER}
        name="gender"
        onChange={handleChange}
        value={values?.gender || ""}
        placeholder="Selecciona tu género"
        required
      />
      <SelectWithLabel
        required
        options={countries}
        label="País"
        name="idCountry"
        value={values?.idCountry || ""}
        onChange={handleChange}
        placeholder="Selecciona tu país"
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-8`}
      >
        Crear Cuenta
      </button>
    </form>
  );
};
