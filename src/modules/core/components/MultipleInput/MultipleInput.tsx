import { ReactNode } from "react";
import { fontMonomaniacOne } from "@/modules/core/utils";

interface IProps {
  label: string;
  children: ReactNode
}

export const MultipleInput = ({
  label,children,
}:  IProps) => {
  return (
    <div className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}>
      <label className="text-white text-2xl">
        {label}
      </label>
      {children}
    </div>
  );
};
