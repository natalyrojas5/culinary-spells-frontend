"use client";

import { fontMonomaniacOne } from "@/modules/core/utils";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface IProps {
  label: string;
  placeholder: string;
  name: string;
}

export const InputPassword = ({ label, placeholder, name }: IProps) => {
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
          className="p-3 rounded-lg shadow-lg w-full text-2xl border-4 c-border-golden-yellow"
          id={name}
          name={name}
          placeholder={placeholder}
          type={isInputText ? "text" : "password"}
        />
        {isInputText ? (
          <FaEyeSlash {...propsIcon} onClick={() => setIsInputText(false)} />
        ) : (
          <FaEye {...propsIcon} onClick={() => setIsInputText(true)} />
        )}
      </div>
    </fieldset>
  );
};
