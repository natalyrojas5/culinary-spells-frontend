import { fontMonomaniacOne } from "@/modules/core/utils";
import { MouseEventHandler } from "react";

interface Options {
  value: number;
  text: string;
}

interface IProps {
  label: string;
  placeholder: string;
  name: string;
  options: Array<Options>;
  required: boolean | undefined;
  withLink?: boolean;
  linkText?: string ;
  click ?: MouseEventHandler<HTMLParagraphElement>;
  isAdd: boolean
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

export const SelectWithLabel = ({
  label,
  placeholder,
  name,
  options = [],
  required,
  withLink = false,
  linkText,
  click,
  isAdd = true,
  onChange,
  value,
}: IProps) => {
  return (
    <fieldset
      className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}
    >
      <label htmlFor={name} className={`${isAdd ? 'text-white' : 'c-txt-golden-yellow'} text-2xl flex w-full justify-between`}>
        {label}
        {withLink &&
          <p className="c-txt-golden-yellow cursor-pointer" onClick={click}>
            {linkText}
          </p>
        }
      </label>
      <select
        defaultValue=""
        required={required}
        name={name}
        className="p-3 rounded-lg shadow-lg w-full text-2xl border-4 c-border-golden-yellow outline-none"
        id={name}
        onChange={onChange}
        value={value}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </fieldset>
  );
};
