import pumpkins from "../assets/pumpkins.jpg";
import ghost from "../assets/ghost.jpg";
import fire from "../assets/fire.jpg";

export const RECIPE_IMAGE_FILTERS = [
  {
    label: "Calabazas",
    get prompt() {
      return "Transform the food into a vibrant, animated scene with a Halloween twist. Add playful pumpkins around the dish, glowing softly in warm hues, with subtle animated spider webs in the background. The scene should have a whimsical, Pixar-style animation with a magical Halloween atmosphere.";
    },
    ref: pumpkins,
  },
  {
    label: "Fantasmas",
    get prompt() {
      return "Add an enchanting, animated touch to the food, featuring friendly ghosts floating playfully around the dish. The background should have soft, glowing wisps, and everything should feel lively and charming, with a magical Pixar-inspired animation style, capturing a spooky but cute Halloween mood.";
    },
    ref: ghost,
  },
  {
    label: "Fuego",
    get prompt() {
      return "Turn the food into a magical, animated scene with flickering, fiery elements. Add animated flames gently dancing around the edges of the dish, with glowing embers and warm hues. The animation should evoke a cozy, yet adventurous Halloween vibe, while keeping the Pixar-style whimsical and enchanting.";
    },
    ref: fire,
  },
];
