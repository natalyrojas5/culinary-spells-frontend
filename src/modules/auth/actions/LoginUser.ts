import { signIn } from "next-auth/react";

export const loginUserService = async (formData: FormData) => {
  try {
    const credentials = Object.fromEntries(formData);

    const response = await signIn("credentials", {
      ...credentials,
      redirect: false,
    });
    console.log(response)
    return response;
  } catch (error) {
    console.error(error);
  }
};
