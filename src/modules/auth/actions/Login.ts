import { signIn } from "next-auth/react";

export const loginService = async (formData: FormData) => {
  try {
    const credentials = Object.fromEntries(formData);

    const response = await signIn("credentials", {
      ...credentials,
      redirect: false,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
