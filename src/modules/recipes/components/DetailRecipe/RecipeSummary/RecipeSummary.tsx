import { fontMali, fontMonomaniacOne } from "@/modules/core/utils";
import { FaBook } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

interface IProps {
  recipeTypeName: string;
  cookingTime: string;
}

export const RecipeSummary = ({ recipeTypeName, cookingTime }: IProps) => {
  return (
    <section className="flex gap-4">
      <aside className="p-5 border-2 c-border-golden-yellow rounded-lg flex gap-4 items-center">
        <FaBook className="c-txt-golden-yellow" size={50} />
        <div>
          <p
            className={`c-txt-golden-yellow ${fontMonomaniacOne.className} text-2xl`}
          >
            Tipo de Receta
          </p>
          <p className={`text-white text-xl ${fontMali.className}`}>
            {recipeTypeName}
          </p>
        </div>
      </aside>
      <aside className="p-5 border-2 c-border-golden-yellow rounded-lg flex gap-4 items-center">
        <FaRegClock className="c-txt-golden-yellow" size={50} />
        <div>
          <p
            className={`c-txt-golden-yellow ${fontMonomaniacOne.className} text-2xl`}
          >
            Tiempo de preparación
          </p>
          <p className={`text-white text-xl ${fontMali.className}`}>
            {cookingTime}
          </p>
        </div>
      </aside>
    </section>
  );
};
