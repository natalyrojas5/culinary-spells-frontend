import { fontMonomaniacOne } from "@/modules/core/utils";

interface IProps {
  label: string;
  placeholder: string;
  name: string;
  type: "text" | "email";
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const InputWithLabel = ({
  label,
  placeholder,
  name,
  type = "text",
  required,
  onChange,
  value
}: IProps) => {
  return (
    <fieldset
      className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className}`}
    >
      <label htmlFor={name} className="text-white text-2xl">
        {label}
      </label>
      <input
        className="p-3 rounded-lg shadow-lg w-full text-2xl border-4 c-border-golden-yellow outline-none"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={onChange}
        value={value}
      />
    </fieldset>
  );
};
