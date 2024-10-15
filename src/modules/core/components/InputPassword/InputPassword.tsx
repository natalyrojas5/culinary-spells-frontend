"use client";

import { fontMonomaniacOne } from "@/modules/core/utils";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface IProps {
  label: string;
  placeholder: string;
  name: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputPassword = ({
  label,
  placeholder,
  name,
  required = false,
  onChange,
}: IProps) => {
  const [isInputText, setIsInputText] = useState(false);

  const propsIcon = {
    className: "absolute top-3 right-4 cursor-pointer",
    size: 45,
  };

  return (
    <fieldset
      className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}
    >
      <label htmlFor={name} className="text-white text-2xl">
        {label}
      </label>
      <div className="w-full relative">
        <input
          className="p-3 rounded-lg shadow-lg w-full text-2xl border-4 c-border-golden-yellow pr-20 outline-none"
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          type={isInputText ? "text" : "password"}
          onChange={onChange}
        />
        {isInputText ? (
          <FaEyeSlash {...propsIcon} onClick={() => setIsInputText(false)} color="gray" />
        ) : (
          <FaEye {...propsIcon} onClick={() => setIsInputText(true)}  color="gray"/>
        )}
      </div>
    </fieldset>
  );
};
