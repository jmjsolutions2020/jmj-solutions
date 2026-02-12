import { MUG_IMAGES, CUSHION_IMAGES, TSHIRT_IMAGES, ACCESSORIES_IMAGES, BUNDLE_IMAGES } from "@/data/images";
export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  startingPrice: number;
  image: string;
}

export const SHOP_CATEGORIES = [
  {
    id: "mugs",
    name: "Mugs",
    description: "Mugs for every occasion",
    startingPrice: 159,
    image: MUG_IMAGES.thumbnail,
    items: [
      {
        id: "mug-1",
        name: "Minimal Mugs",
        description: "Minimal Mugs",
        startingPrice: 159,
        image: MUG_IMAGES.plain_mug,
      },
      {
        id: "mug-2",
        name: "Magic Mugs",
        description: "Magic Mugs",
        startingPrice: 299,
        image: MUG_IMAGES.magic_mug,
      },
      {
        id: "mug-3",
        name: "Inner Color Mugs",
        description: "Inner Color Mugs",
        startingPrice: 199,
        image: MUG_IMAGES.inner_color_mug,
      },
      {
        id: "mug-4",
        name: "LED Mugs",
        description: "LED Mugs",
        startingPrice: 249,
        image: MUG_IMAGES.led_mug,
      },
    ],
  },
  {
    id: "cushions",
    name: "Cushions",
    description: "Comfort wrapped in memories",
    startingPrice: 299,
    image: CUSHION_IMAGES.thumbnail,
    items: [
      {
        id: "cushion-1",
        name: "Square Cushions",
        description: "Square Cushions",
        startingPrice: 299,
        image: CUSHION_IMAGES.square_cushion,
      },
      {
        id: "cushion-2",
        name: "Couple Cushions",
        description: "Couple Cushions",
        startingPrice: 499,
        image: CUSHION_IMAGES.couple_cushion,
      },
      {
        id: "cushion-3",
        name: "Magic Cushions",
        description: "Magic Cushions",
        startingPrice: 399,
        image: CUSHION_IMAGES.magic_cushion,
      },
      {
        id: "cushion-4",
        name: "Red Fur Cushions",
        description: "Red Fur Cushions",
        startingPrice: 319,
        image: CUSHION_IMAGES.red_fur_cushion,
      },
    ],
  },
  {
    id: "tshirts",
    name: "Tshirts",
    description: "Personalised T-Shirts for everyone",
    startingPrice: 299,
    image: TSHIRT_IMAGES.thumbnail,
    items: [
      {
        id: "tshirt-1",
        name: "Dry-fit T-Shirts",
        description: "Dry-fit T-Shirts",
        startingPrice: 299,
        image: TSHIRT_IMAGES.dryfit_tshirt,
      },
      {
        id: "tshirt-2",
        name: "Tees for Kids",
        description: "Tees for Kids",
        startingPrice: 379,
        image: TSHIRT_IMAGES.kids_tshirt,
      },
      {
        id: "tshirt-3",
        name: "Tees with colors",
        description: "Tees with colors",
        startingPrice: 399,
        image: TSHIRT_IMAGES.blue_tshirt,
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Small gifts, big memories",
    startingPrice: 59,
    image: ACCESSORIES_IMAGES.thumbnail,
    items: [
      {
        id: "acc-1",
        name: "Keychains",
        description: "Custom Keychains",
        startingPrice: 59,
        image: ACCESSORIES_IMAGES.keychains,
      },
      {
        id: "acc-2",
        name: "Caps",
        description: "Custom Caps",
        startingPrice: 199,
        image: ACCESSORIES_IMAGES.caps,
      },
      {
        id: "acc-3",
        name: "Friendship Bands",
        description: "Custom Friendship Bands",
        startingPrice: 99,
        image: ACCESSORIES_IMAGES.friendship_bands,
      },
    ],
  },
  {
    id: "bundles",
    name: "Bundles",
    description: "Perfectly paired gifts for every occasion",
    startingPrice: 499,
    image: BUNDLE_IMAGES.thumbnail,
    items: [
      {
        id: "bundle-1",
        name: "Mugs & Sippers",
        description: "Mugs & Sippers",
        startingPrice: 499,
        image: BUNDLE_IMAGES.mugs_and_sippers,
      },
      {
        id: "bundle-2",
        name: "Frames and Mirrors",
        description: "Frames and Mirrors",
        startingPrice: 599,
        image: BUNDLE_IMAGES.frames_and_mirrors,
      },
      {
        id: "bundle-3",
        name: "Choose Your Own Bundle",
        description: "Choose Your Own Bundle",
        startingPrice: 699,
        image: BUNDLE_IMAGES.own_bundle,
      },
    ],
  },
];
