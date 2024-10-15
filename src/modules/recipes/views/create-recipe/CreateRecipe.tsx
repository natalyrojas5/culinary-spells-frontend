import { GoBack } from "@/modules/core/components";
import { fontMonomaniacOne } from "@/modules/core/utils";
import { FormCreateEditRecipe } from "@/modules/recipes/components";

interface IProps{
    title:string
}

export const ViewCreateRecipe = ({ title } : IProps) => {
    return (
        <>
            <GoBack description="Regresar" />
            <header
                className={`${fontMonomaniacOne.className} flex flex-col items-center gap-2 mb-4`}
            >
                <h1 className="font-extrabold text-5xl c-txt-golden-yellow">{title}</h1>
            </header>
            <FormCreateEditRecipe />
        </>
    )
}
