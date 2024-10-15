import { fontMonomaniacOne } from "@/modules/core/utils";
import { Recipe } from "../Recipe";

export const Recipes = () => {
  return (
    <section className="mt-10">
      <h2 className={`text-3xl text-white ${fontMonomaniacOne.className} mb-6`}>
        Todas las Recetas
      </h2>
      <section className="grid grid-cols-3 gap-6">
        <Recipe />
        <Recipe />
        <Recipe />
      </section>
    </section>
  );
};
