import { CldUploadWidget } from "next-cloudinary";
import { BUTTONCLOUDINARY } from "@/modules/core/constants";
import { fontMonomaniacOne } from "@/modules/core/utils";
import Image from "next/image";
import empty from "@/modules/core/assets/empty.jpg";
import { BUTTON } from "@/modules/core/constants";

interface Filters {
  label: string;
  propmt: string;
}

interface IProps {
  label: string;
  urlImagePreview: string;
  labelBtnUpload: string;
  filters: Array<Filters>;
  name?: string;
  isAdd: boolean;
}

export const UploadImage = ({
  label,
  urlImagePreview = "",
  labelBtnUpload = "Subir Foto",
  filters = [],
  name,
  isAdd,
}: IProps) => {
  const { orange, goldenYellow } = BUTTON;
  return (
    <fieldset
      className={`flex flex-col gap-3 items-start w-full ${fontMonomaniacOne.className} `}
    >
      <label
        htmlFor={name}
        className={`${isAdd ? "text-white" : "c-txt-golden-yellow"}  text-2xl`}
      >
        {label}
      </label>
      <div className="grid grid-cols-3 w-full gap-10">
        <div className="col-span-2 text-center">
          <Image
            src={urlImagePreview === '' ? empty : urlImagePreview}
            height={300}
            width={400}
            alt="Image Subida Cloudinary"
            className="rounded-lg w-full h-[400px] object-cover"
          />
          <CldUploadWidget
            uploadPreset="test-ia"
            options={BUTTONCLOUDINARY.options}
          >
            {({ open }) => {
              return (
                <button
                  className={`text-center btn bg-golden-yellow  text-black rounded-md px-5 py-3 my-4 text-2xl ${goldenYellow.size.medium}`}
                  onClick={() => open()}
                >
                  {labelBtnUpload}
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        <div className="col-span-1 flex  gap-5 flex-col pt-10">
          {filters.map((filter, i) => {
            return (
              <button
                key={i}
                data-prompt={filter.propmt}
                className={`w-full ${orange.type.base} ${orange.size.medium}`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>
    </fieldset>
  );
};
