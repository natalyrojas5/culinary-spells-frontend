import useForm from "@/modules/core/hooks/useForm";
import { SchemaRegisterUser } from "../schemas";
import { formatErrors } from "@/modules/core/utils";
import { toast } from "react-toastify";

export const useRegisterUser = () => {
  const { values, handleChange } = useForm({
    password: "",
    name: "",
    lastname: "",
    gender: "",
    idCountry: "",
    repeat_password: "",
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

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = isFormValid();
    if (!isValid) return;
  };

  return { register, handleChange, values };
};
