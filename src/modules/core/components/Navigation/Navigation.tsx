"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ghost from "@/modules/core/assets/ghost.svg";
import { fontJollyLodger } from "@/modules/core/utils";
import { PATH } from "@/modules/auth/constants";
import { BUTTON } from "@/modules/core/constants";
import { UserLogged } from "../UserLogged";

export const Navigation = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;

  const isLogged = false;
  const pathname = usePathname();
  const isPathHome = pathname === "/";

  return (
    <header
      className={`${fontJollyLodger.className} bg-purple-700 p-6 border-b-8 c-border-golden-yellow sticky top-0 w-full z-10`}
    >
      <nav className="flex justify-between items-center content">
        <Link href="/" className="flex items-center gap-4">
          <Image src={ghost} width={70} height={60} alt="Ghost" />
          <div>
            <h1 className="text-4xl c-txt-golden-yellow">Hechizos</h1>
            <h2 className="text-3xl text-white">Culinarios </h2>
          </div>
        </Link>
        {isLogged ? (
          <UserLogged />
        ) : isPathHome ? (
          <Link href={PATH.login} className={`${size.big} ${type.base}`}>
            Iniciar Sesión
          </Link>
        ) : (
          <Link href="/" className={`${size.big} ${type.base}`}>
            Home
          </Link>
        )}
      </nav>
    </header>
  );
};
