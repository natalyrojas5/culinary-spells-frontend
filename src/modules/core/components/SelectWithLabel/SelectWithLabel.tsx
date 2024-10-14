import { fontMonomaniacOne } from "@/modules/core/utils";

interface DataSelect{
    value: number;
    text: string
}

interface IProps {
  label: string;
  placeholder: string;
  name: string;
  options: Array<DataSelect>;
  required : boolean | undefined
}

export const SelectWithLabel = ({
  label,
  placeholder,
  name,
  options = [],
  required
}: IProps) => {
  return (
    <fieldset
      className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}
    >
      <label htmlFor={name} className="text-white text-2xl">
        {label}
      </label>
      <select required={required} name={name} className="p-3 rounded-lg shadow-lg w-full text-2xl border-4 c-border-orange" id={name}>
        <option disabled value="">{placeholder}</option>
        {options.map(option => {
            return (
                <option value={option.value}>{option.text}</option>
            )
        })}
      </select>
    </fieldset>
  );
};