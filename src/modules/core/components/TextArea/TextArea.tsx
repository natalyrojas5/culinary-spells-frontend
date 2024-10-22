import { fontMonomaniacOne } from "@/modules/core/utils";

interface IProps {
  label: string;
  placeholder: string;
  name: string;
  required?: boolean;
  isTextWhite: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

export const TextArea = ({
  label,
  placeholder,
  name,
  required,
  isTextWhite = true,
  onChange,
  value,
}: IProps) => {
  return (
    <fieldset
      className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}
    >
      <label
        htmlFor={name}
        className={`${
          isTextWhite ? "text-white" : "c-txt-golden-yellow"
        } text-2xl`}
      >
        {label}
      </label>
      <textarea
        style={{ resize: "none" }}
        rows={5}
        className="p-3 rounded-lg shadow-lg w-full text-2xl border-4 c-border-golden-yellow"
        id={name}
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </fieldset>
  );
};
