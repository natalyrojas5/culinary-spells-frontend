import { MyRecipe } from "..";

export const MyRecipes = () => {
  return (
    <section className="grid grid-cols-3 gap-6 mt-8">
      <MyRecipe />
      <MyRecipe />
      <MyRecipe />
    </section>
  );
};
