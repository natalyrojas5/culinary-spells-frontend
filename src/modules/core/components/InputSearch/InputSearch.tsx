import { fontMonomaniacOne } from "@/modules/core/utils";
import { FaSearch } from "react-icons/fa";

export const InputSearch = () => {
  return (
    <fieldset
      className={`relative flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}
    >
      <input
        className="p-3 rounded-lg shadow-lg w-full text-2xl border-4 c-border-golden-yellow pr-20"
        placeholder="Buscar"
        type="text"
      />
      <FaSearch
        size={40}
        color="gray"
        className="absolute right-6 top-3 cursor-pointer"
      />
    </fieldset>
  );
};
