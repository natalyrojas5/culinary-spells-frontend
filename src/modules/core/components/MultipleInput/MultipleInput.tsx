import { ReactNode } from "react";
import { fontMonomaniacOne } from "@/modules/core/utils";

interface IProps {
  label: string;
  children: ReactNode;
  isAdd: boolean
}

export const MultipleInput = ({
  label,children,isAdd = true
}:  IProps) => {
  return (
    <div className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}>
      <label className={` ${isAdd ? 'text-white' :'c-txt-golden-yellow'} text-2xl`}>
        {label}
      </label>
      {children}
    </div>
  );
};
