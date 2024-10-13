import Image from "next/image";
import Link from "next/link";
import ghost from "@/modules/core/assets/ghost.svg";
import { fontJollyLodger } from "@/modules/core/utils";
import { BUTTON } from "@/modules/core/constants";
import { UserLogged } from "../UserLogged";

export const Navigation = () => {
  const {
    orange: { size, type },
  } = BUTTON;

  const isLogged = true;

  return (
    <header
      className={`${fontJollyLodger.className} bg-purple-700 p-6 border-b-8 c-border-orange`}
    >
      <nav className="flex justify-between items-center content">
        <Link href="/" className="flex items-center gap-4">
          <Image src={ghost} width={70} height={60} alt="Ghost" />
          <div>
            <h1 className="text-4xl c-txt-orange">Hechizos</h1>
            <h2 className="text-3xl text-white">Culinarios</h2>
          </div>
        </Link>
        {isLogged ? (
          <UserLogged />
        ) : (
          <button className={`${size.big} ${type.base}`}>Iniciar Sesión</button>
        )}
      </nav>
    </header>
  );
};
