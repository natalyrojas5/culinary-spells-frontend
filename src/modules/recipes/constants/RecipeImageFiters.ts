import pumpkins from "../assets/pumpkins.jpg";
import ghost from "../assets/ghost.jpg";
import fire from "../assets/fire.jpg";

export const RECIPE_IMAGE_FILTERS = [
  {
    label: "Calabazas",
    get prompt() {
      return "Transform the food into a vibrant animated scene with a Halloween twist add soft glowing pumpkins around the dish in warm hues with subtle animated embers to capture the essence of autumn";
    },
    ref: pumpkins,
  },
  {
    label: "Fantasmas",
    get prompt() {
      return "Add an enchanting animated touch to the food featuring Pixar-style animation with whimsical friendly ghosts floating playfully around the dish to fully evoke the Halloween mood";
    },
    ref: ghost,
  },
  {
    label: "Fuego",
    get prompt() {
      return "Animate the edges of the dish with glowing embers and warm tones reminiscent of fire to create an adventurous Halloween vibe while keeping the whimsical and enchanting Pixar style";
    },
    ref: fire,
  },
];
