import { fontMonomaniacOne } from "@/modules/core/utils";

interface IProps {
  label: string;
  value?: string;
  name: string;
}

export const Label = ({
  label,
  value,
  name
}: IProps) => {
  return (
    <div
      className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}
    >
      <label htmlFor={name} className="c-txt-golden-yellow text-2xl">
        {label}
      </label>
      <h2 className="text-white text-3xl">{value}</h2>
    </div>
  );
};
