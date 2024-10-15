import { fontMali, fontMonomaniacOne } from "@/modules/core/utils";

export const RecipePreparation = () => {
  return (
    <section className="p-4">
      <h1
        className={`
        text-4xl c-txt-golden-yellow leading-6 font-bold ${fontMonomaniacOne.className} mb-6`}
      >
        ¡A cocinar!
      </h1>
      <ol
        className={`${fontMali.className} text-xl text-white flex flex-col gap-3`}
      >
        <li>
          1. Lorem ipsum dolor sit amet consectetur. Mus at ut leo egestas
        </li>
        <li>
          2. Lorem ipsum dolor sit amet consectetur. Mus at ut leo egestas
        </li>
      </ol>
      {/* <p className={`${fontMali.className} text-xl text-white `}>
        Lorem ipsum dolor sit amet consectetur. Mus at ut leo egestas
        pellentesque dis mollis. At purus consequat cras a in faucibus. Turpis
        nisl dui eget vitae viverra amet non sit tortor. Maecenas ut ac ornare
        faucibus vitae elementum viverra.
      </p> */}
    </section>
  );
};
