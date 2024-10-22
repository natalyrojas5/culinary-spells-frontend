import Image from "next/image";
import { fontMali } from "../../utils";
import avatarSad from "@/modules/core/assets/avatar-sad.png";

interface IProps {
  className?: string;
}

export const NotFound = ({ className = "" }: IProps) => {
  return (
    <section
      className={`p-4 bg-purple-700 ${fontMali.className} flex gap-4 w-full items-center rounded-lg ${className}`}
    >
      <Image
        src={avatarSad}
        width={300}
        height={300}
        className="w-[240px]"
        alt="Not Found"
      />
      <div className="text-white flex flex-col gap-3">
        <h2 className="text-3xl  font-bold">
          Oops! No encontramos resultados.
        </h2>
        <p className="text-xl">Aún no hay datos disponibles.</p>
      </div>
    </section>
  );
};
