import { fontMonomaniacOne } from "@/modules/core/utils";
import Image from "next/image";
import empty from "@/modules/core/assets/empty.jpg";

interface IImage {
  idImage: number;
  major: number;
  link: string;
}

interface IProps {
  images: IImage[];
}

export const RecipeImages = ({ images }: IProps) => {
  const hasImages = images.length > 0;
  if (hasImages) {
    return (
      <section className="p-4">
        <h1
          className={`text-4xl c-txt-golden-yellow leading-6 font-bold ${fontMonomaniacOne.className} mb-6`}
        >
          Galería de Recetas
        </h1>
        <div className="flex gap-8">
          {images.map(({ link }) => {
            const hasLink = link !== "";
            const hasImage = link?.startsWith("http");
            return (
              <Image
                key={crypto.randomUUID()}
                src={hasLink && hasImage ? link : empty}
                width={300}
                height={300}
                alt=""
                className="rounded-lg w-[300px] h-[300px] object-cover"
              />
            );
          })}
        </div>
      </section>
    );
  }
};
