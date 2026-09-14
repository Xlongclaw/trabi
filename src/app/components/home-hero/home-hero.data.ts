import { tt2, tt4, tt6 } from "./images";

export interface HomeHeroData {
  title: {
    line1: string;
    line2: string;
  };
  description: string;

  images: typeof tt2[];
  imageAlt: string;
  slider: {
    interval: number;
    transitionDuration: number;
    showIndicators: boolean;
  };

  cta: {
    label: string;
  };

  destination: {
    title: string;
    description: string;
  };
}

export const homeHeroData: HomeHeroData = {
  title: {
    line1: "Go somewhere",
    line2: "worth remembering.",
  },

  description:
    "Discover unforgettable places, join incredible trips, and meet people who want to experience the world just like you do.",

  images: [tt2, tt4, tt6],

  imageAlt: "Beautiful travel destination",

  slider: {
    interval: 5000,
    transitionDuration: 1500,
    showIndicators: true,
  },

  cta: {
    label: "Explore Journeys",
  },

  destination: {
    title: "Royal Kashmir & Ladakh",
    description:
      "Unwind in handcrafted cedar houseboats, and ascend snow-clad pine peaks of Gulmarg & Pahalgam.",
  },
};