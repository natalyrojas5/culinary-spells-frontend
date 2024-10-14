"use client";

import { InputPassword, InputWithLabel } from "@/modules/core/components";
import { SelectWithLabel } from "@/modules/core/components/SelectWithLabel";
import { BUTTON, GENDERINFO } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";

export const FormCreateAccount = () => {
  const {
    orange: { size, type },
  } = BUTTON;
  return (
    <form className="flex flex-col gap-4 items-center w-[500px] mx-auto mt-8">
      <InputWithLabel
        label="Nombres*"
        name="name"
        type="text"
        placeholder="Ingresa tus nombres"
        required
      />
      <InputWithLabel
        label="Apellidos(opcional)"
        name="lastname"
        type="email"
        placeholder="Ingresa tus apellidos"
        required
      />
      <InputWithLabel
        label="Correo electrónico"
        name="email"
        type="email"
        placeholder="Ingresa tu correo electrónico"
        required
      />
      <InputPassword
        label="Contraseña"
        name="password"
        placeholder="Ingresa tu contraseña"
        required
      />
      <InputPassword
        label="Repetir Contraseña"
        name="password"
        placeholder="Ingresa tu contraseña"
        required
      />
      <SelectWithLabel
        required
        label="Género"
        options={GENDERINFO}
        name="gender"
        placeholder="Selecciona tu género"
      />
      <SelectWithLabel
        required
        options={[]}
        label="País"
        name="idCountry"
        placeholder="Selecciona tu país"
      />
      <button
        type="button"
        className={`${size.big} ${type.base} ${fontJollyLodger.className} mt-8`}
      >
        Crear Cuenta
      </button>
    </form>
  );
};