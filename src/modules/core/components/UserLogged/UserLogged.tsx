import { fontMali } from "@/modules/core/utils";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

export const UserLogged = () => {
  return (
    <article
      className={`bg-purple-600 text-white rounded-lg shadow-lg p-3 px-4 ${fontMali.className} flex gap-3 items-center`}
    >
      <RxAvatar size={40} />
      <header>
        <p className="font-semibold text-md">Nataly Rojas</p>
        <p className="text-xs">natalyrojasm5@gmail.com</p>
      </header>
      <IoIosArrowDown size={30} className="cursor-pointer" />
    </article>
  );
};
