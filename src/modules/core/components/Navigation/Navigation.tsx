"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ghost from "@/modules/core/assets/ghost.svg";
import { fontJollyLodger } from "@/modules/core/utils";
import { PATH } from "@/modules/auth/constants";
import { PATH as PATH_RECIPES } from "@/modules/recipes/constants";
import { BUTTON } from "@/modules/core/constants";
import { UserLogged } from "../UserLogged";
import { useAuthenticated } from "../../hooks";

export const Navigation = () => {
  const {
    goldenYellow: { size, type },
  } = BUTTON;

  const pathname = usePathname();
  const isPathHome = pathname === "/";

  const { isAuthenticated } = useAuthenticated();

  return (
    <header
      className={`${fontJollyLodger.className} bg-purple-700 p-6 border-b-8 c-border-golden-yellow sticky top-0 w-full z-10`}
    >
      <nav className="flex justify-between items-center content">
        <Link
          href={isAuthenticated ? `/${PATH_RECIPES.recipes}` : "/"}
          className="flex items-center gap-4"
        >
          <Image src={ghost} width={70} height={60} alt="Ghost" priority />
          <div>
            <h1 className="text-4xl c-txt-golden-yellow">Hechizos</h1>
            <h2 className="text-3xl text-white">Culinarios </h2>
          </div>
        </Link>
        {isAuthenticated ? (
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
