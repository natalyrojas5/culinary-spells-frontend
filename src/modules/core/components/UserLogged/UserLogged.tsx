"use client";

import { fontMali } from "@/modules/core/utils";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useAuthenticated, useNavigation } from "../../hooks";

export const UserLogged = () => {
  const { user: userLogged } = useAuthenticated();
  const { setIsOpen, isOpen } = useNavigation();
  const styleIcon = {
    size: 30,
    className: "cursor-pointer",
  };

  return (
    <article
      className={`bg-purple-600 text-white rounded-lg shadow-lg p-3 px-4 ${fontMali.className} flex gap-3 items-center`}
    >
      <RxAvatar size={40} />
      <header>
        <p className="font-semibold text-md"> {userLogged?.name || "-"}</p>
        <p className="text-xs"> {userLogged?.email || "-"} </p>
      </header>
      {isOpen ? (
        <IoIosArrowUp {...styleIcon} onClick={() => setIsOpen(false)} />
      ) : (
        <IoIosArrowDown {...styleIcon} onClick={() => setIsOpen(true)} />
      )}
    </article>
  );
};
