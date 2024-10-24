import { GoBack } from "@/modules/core/components";
import { fontMonomaniacOne } from "@/modules/core/utils";
import { MyRecipes } from "@/modules/recipes/components";

export const ViewMyRecipes = () => {
  return (
    <>
      <GoBack text="Ir a Recetas" toRecipes />
      <main className="flex flex-col items-center gap-3 w-full">
        <h1
          className={`font-extrabold text-6xl c-txt-golden-yellow mb-6 ${fontMonomaniacOne.className}`}
        >
          Mis Receta
        </h1>
        <MyRecipes />
      </main>
    </>
  );
};
