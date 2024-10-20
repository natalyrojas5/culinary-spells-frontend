export const getRecipeId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("x-recipe");
  }
  return 0;
};
