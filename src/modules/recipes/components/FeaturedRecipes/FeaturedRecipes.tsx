import { Recipe } from "@/modules/recipes/components";
import { fontMonomaniacOne } from "@/modules/core/utils";

export const FeaturedRecipes = () => {
  return (
    <section className="mt-10">
      <h2
        className={`text-3xl c-txt-orange ${fontMonomaniacOne.className} mb-6`}
      >
        Recetas Destacadas
      </h2>
      <section className="grid grid-cols-3 gap-6">
        <Recipe isHighlighted />
        <Recipe isHighlighted />
        <Recipe isHighlighted />
      </section>
    </section>
  );
};
