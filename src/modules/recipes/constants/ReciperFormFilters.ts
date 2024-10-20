import calabaza from "@/modules/recipes/assets/calabaza.png";
import calabazaFuego from "@/modules/recipes/assets/calabaza_fuego.png";
import calabazaGhost from "@/modules/recipes/assets/calabaza_ghost.png";



export const RECIPE_FORM_FILTERS = [
    {
        label: 'Calabazas',
        get propmt (){
            return "Pumkins"
        },
        ref:calabaza
    },
    {
        label: 'Fantasmas',
        get propmt (){
            return "Ghosts"
        },
        ref:calabazaGhost
    },
    {
        label: 'Fuego',
        get propmt (){
            return "Fired"
        },
        ref:calabazaFuego
    }
]
  