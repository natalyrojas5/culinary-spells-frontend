import { CldUploadWidgetProps } from "next-cloudinary";

export const BUTTONCLOUDINARY : CldUploadWidgetProps = {
    options: {
        sources: ["local"],
        multiple: false,
        maxFiles: 1,
        language: "es",
        text: {
            es: {
                or: "O",
                menu: {
                    files: "Subir desde tu dispositivo",
                },
                local: {
                    browse: "Seleccionar",
                    dd_title_single: "Arrastra tu imagen aquí",
                }
            },
        },
    }
} 