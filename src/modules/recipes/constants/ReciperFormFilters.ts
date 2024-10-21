import calabaza from "@/modules/recipes/assets/calabaza.png";
import calabazaFuego from "@/modules/recipes/assets/calabaza_fuego.png";
import calabazaGhost from "@/modules/recipes/assets/calabaza_ghost.png";



export const RECIPE_FORM_FILTERS = [
    {
        label: 'Calabazas',
        get propmt (){
            return "Add a spooky with background animated by adding Pumpkins bones and spiders in the background but let everything be animated with Halloween theme"
        },
        ref:calabaza
    },
    {
        label: 'Fantasmas',
        get propmt (){
            return "Add a spooky with background animated by adding Ghosts bones and spiders in the background but let everything be animated with Halloween theme"
        },
        ref:calabazaGhost
    },
    {
        label: 'Fuego',
        get propmt (){
            return "Add a spooky with background animated by adding Fired bones and spiders in the background but let everything be animated with Halloween theme"
        },
        ref:calabazaFuego
    }
]
  