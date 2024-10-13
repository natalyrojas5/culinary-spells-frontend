import { Jolly_Lodger, Monomaniac_One, Mali } from "next/font/google";

const fontJollyLodger = Jolly_Lodger({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const fontMonomaniacOne = Monomaniac_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const fontMali = Mali({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export { fontJollyLodger, fontMonomaniacOne, fontMali };
