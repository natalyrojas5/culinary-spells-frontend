"use client";

import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export const GoBack = () => {
  const {
    purpleDark: { size, type },
  } = BUTTON;

  const router = useRouter();
  return (
    <button
      type="button"
      className={`
      ${size.big} ${type.base} ${fontJollyLodger.className}  flex gap-2 items-center`}
      onClick={() => router.back()}
    >
      <IoIosArrowBack size={45} />
      Regresar
    </button>
  );
};
