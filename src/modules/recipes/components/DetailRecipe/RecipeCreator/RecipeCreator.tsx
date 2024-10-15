import { fontMali } from "@/modules/core/utils";
import Image from "next/image";
import empty from "@/modules/core/assets/empty.jpg";

export const RecipeCreator = () => {
  return (
    <aside
      className={`p-8 bg-purple-700   shadow-lg rounded-lg ${fontMali.className}`}
    >
      <h2 className="text-3xl c-txt-golden-yellow leading-6 font-bold mb-6">
        Acerca del Autor
      </h2>
      <div className="flex gap-6 text-white">
        <Image
          src={empty}
          width={400}
          height={160}
          alt="Recipe Creator"
          className="rounded-full w-[120px] h-[120px] object-cover"
        />
        <div>
          <p className="text-2xl font-semibold mb-4">
            [Nombre + Apellido de autor]
          </p>
          <p className="text-lg mb-1">[Correo del autor]</p>
          <p className="text-lg">[País de autor]</p>
        </div>
      </div>
    </aside>
  );
};
