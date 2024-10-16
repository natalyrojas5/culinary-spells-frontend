import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "@/modules/core/hooks";
import { formatErrors } from "@/modules/core/utils";
import { SchemaLoginUser } from "../schemas";
import { loginUserService } from "../actions";

export const useLoginUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange, resetForm } = useForm({
    password: "",
    email: "",
  });

  const isFormValid = () => {
    const userValidate = SchemaLoginUser.safeParse(values);

    if (!userValidate.success) {
      const formattedErrors = formatErrors(userValidate.error.errors);
      const firstError = formattedErrors[0].mensaje;
      toast.error(firstError, { position: "top-right" });
      return false;
    }

    return true;
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = isFormValid();
    if (!isValid) return;

    setIsLoading(true);

    try {
      const form = new FormData();
      const { password, email } = values;
      form.append("password", password);
      form.append("email", email);

      const response = await loginUserService(form);
      const isOk = response?.ok;

      if (isOk) {
        window.location.replace("/recetas");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { login, handleChange, values, isLoading };
};
