import { fontMali } from "@/modules/core/utils";
import Image from "next/image";
import boy from "@/modules/core/assets/boy.jpg";
import girl from "@/modules/core/assets/girl.jpg";

interface IProps {
  names?: string;
  email?: string;
  countryName: string;
  gender: number;
}

export const RecipeCreator = ({
  names,
  email,
  countryName,
  gender = 0,
}: IProps) => {
  const IS_BOY = gender === 1;
  return (
    <aside
      className={`p-8 bg-purple-700   shadow-lg rounded-lg ${fontMali.className}`}
    >
      <h2 className="text-3xl c-txt-golden-yellow leading-6 font-bold mb-6">
        Acerca del Autor
      </h2>
      <div className="flex gap-6 text-white">
        <Image
          src={IS_BOY ? boy : girl}
          width={400}
          height={160}
          alt="Recipe Creator"
          className="rounded-full w-[120px] h-[120px] object-cover"
        />
        <div>
          <p className="text-2xl font-semibold mb-4">{names}</p>
          <p className="text-lg mb-1">{email}</p>
          <p className="text-lg">{countryName}</p>
        </div>
      </div>
    </aside>
  );
};
