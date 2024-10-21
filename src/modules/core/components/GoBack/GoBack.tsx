"use client";

import { BUTTON } from "@/modules/core/constants";
import { fontJollyLodger } from "@/modules/core/utils";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface IProps {
  text?: string;
  path?: string;
}
export const GoBack = ({ text = "Regresar", path = "" }: IProps) => {
  const {
    purpleDark: { size, type },
  } = BUTTON;

  const router = useRouter();
  const goBack = () => {
    if (path) {
      router.push(path);
    } else {
      router.back();
    }
  };
  return (
    <button
      type="button"
      className={`
      ${size.big} ${type.base} ${fontJollyLodger.className}  flex gap-2 items-center`}
      onClick={goBack}
    >
      <IoIosArrowBack size={45} />
      {text}
    </button>
  );
};
