import { useForm } from "@/modules/core/hooks";
import { forgotPasswordService } from "../actions";
import { toast } from "react-toastify";

export const useForgotPassword = () => {
  const { values, handleChange, resetForm } = useForm({
    email: "",
  });

  const forgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { email } = values;
      const { isOk, message } = await forgotPasswordService({ email });
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
    }
  };

  return { forgotPassword, values, handleChange };
};
