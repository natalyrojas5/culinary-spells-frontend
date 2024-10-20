"use client";

import { useForm } from "@/modules/core/hooks";
import { useModalStore } from "@/modules/core/stores";
import { newPasswordService } from "../actions";
import { MODAL } from "../constants";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

export const useNewPassword = () => {
  const params = useParams();
  const { toggle } = useModalStore((state) => state);
  const { values, handleChange, resetForm } = useForm({
    password: "",
    repeat_password: "",
  });

  const generateNewPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { isOk, message } = await newPasswordService({
        password: values.password,
        repeat_password: values.repeat_password,
        token: params?.token as string,
      });
      if (isOk) {
        toast.success(message, {
          position: "top-right",
        });
        toggle({ name: MODAL.passwordCreated, isOpen: true });
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

  return { values, handleChange, generateNewPassword };
};
