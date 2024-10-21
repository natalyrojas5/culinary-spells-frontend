"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "@/modules/core/hooks";
import { formatErrors } from "@/modules/core/utils";
import { SchemaRegisterUser } from "../schemas";
import { registerService } from "../actions";
import { IRegisterRequest } from "../interfaces";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange, resetForm } = useForm({
    password: "",
    name: "",
    lastname: "",
    gender: "",
    idCountry: "",
    repeat_password: "",
    email: "",
  });

  const isFormValid = () => {
    const userValidate = SchemaRegisterUser.safeParse(values);

    if (!userValidate.success) {
      const formattedErrors = formatErrors(userValidate.error.errors);
      const firstError = formattedErrors[0].mensaje;
      toast.error(firstError, { position: "top-right" });
      return false;
    }

    if (values.gender === "") {
      toast.error("El género debe ser Mujer o Hombre", {
        position: "top-right",
      });
      return false;
    }

    return true;
  };

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = isFormValid();
    if (!isValid) return;

    setIsLoading(true);

    try {
      const { password, name, email, idCountry, gender, lastname } = values;

      const payload: IRegisterRequest = {
        password,
        name,
        email,
        idCountry: parseInt(idCountry),
        gender: parseInt(gender),
      };
      if (lastname) payload.lastname = lastname;

      const { isOk, message } = await registerService(payload);

      if (isOk) {
        toast.success(message, {
          position: "top-right",
        });
        resetForm();
      } else {
        toast.error(message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al registrar el usuario", {
        position: "top-right",
      });
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  return { register, handleChange, values, isLoading };
};
