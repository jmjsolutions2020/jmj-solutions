import { start } from "repl";

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
    description: "Personalised mugs for every occasion",
    startingPrice: 159,
    image: "/images/mug-category.jpg",
    items: [
      {
        id: "mug-1",
        name: "Minimal Mugs",
        description: "Minimal Mugs",
        startingPrice: 159,
        image: "/images/minimal-mug.jpg",
      },
      {
        id: "mug-2",
        name: "Magic Mugs",
        description: "Magic Mugs",
        startingPrice: 199,
        image: "/images/magic-mug.jpg",
      },
      {
        id: "mug-3",
        name: "Inner Color Mugs",
        description: "Inner Color Mugs",
        startingPrice: 179,
        image: "/images/inner-color-mug.jpg",
      },
      {
        id: "mug-4",
        name: "Premium Mugs",
        description: "Premium Mugs",
        startingPrice: 249,
        image: "/images/premium-mug.jpg",
      },
    ],
  },
  {
    id: "cushions",
    name: "Cushions",
    description: "Comfortable cushions for your home",
    startingPrice: 299,
    image: "/images/cushion-category.jpg",
    items: [
      {
        id: "cushion-1",
        name: "Square Cushions",
        description: "Square Cushions",
        startingPrice: 299,
        image: "/images/square-cushion.jpg",
      },
      {
        id: "cushion-2",
        name: "Round Cushions",
        description: "Round Cushions",
        startingPrice: 349,
        image: "/images/round-cushion.jpg",
      },
      {
        id: "cushion-3",
        name: "Lumbar Cushions",
        description: "Lumbar Cushions",
        startingPrice: 279,
        image: "/images/lumbar-cushion.jpg",
      },
      {
        id: "cushion-4",
        name: "Heart Cushions",
        description: "Heart Cushions",
        startingPrice: 319,
        image: "/images/heart-cushion.jpg",
      },
    ],
  },
  {
    id: "tshirts",
    name: "Tshirts",
    description: "Personalised T-Shirts for everyone",
    startingPrice: 349,
    image: "/images/tshirt-category.jpg",
    items: [
      {
        id: "tshirt-1",
        name: "Classic T-Shirts",
        description: "Classic T-Shirts",
        startingPrice: 349,
        image: "/images/classic-tshirt.jpg",
      },
      {
        id: "tshirt-2",
        name: "Oversized T-Shirts",
        description: "Oversized T-Shirts",
        startingPrice: 379,
        image: "/images/oversized-tshirt.jpg",
      },
      {
        id: "tshirt-3",
        name: "Premium T-Shirts",
        description: "Premium T-Shirts",
        startingPrice: 399,
        image: "/images/premium-tshirt.jpg",
      },
      {
        id: "tshirt-4",
        name: "Couple T-Shirts",
        description: "Couple T-Shirts",
        startingPrice: 699,
        image: "/images/couple-tshirt.jpg",
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Personalised accessories to complement your style",
    startingPrice: 79,
    image: "/images/accessories-category.jpg",
    items: [
      {
        id: "acc-1",
        name: "Keychains",
        description: "Custom Keychains",
        startingPrice: 79,
        image: "/images/keychain.jpg",
      },
      {
        id: "acc-2",
        name: "Phone Stands",
        description: "Phone Stands",
        startingPrice: 99,
        image: "/images/phone-stand.jpg",
      },
      {
        id: "acc-3",
        name: "Coasters",
        description: "Custom Coasters",
        startingPrice: 89,
        image: "/images/coaster.jpg",
      },
      {
        id: "acc-4",
        name: "Mouse Pads",
        description: "Custom Mouse Pads",
        startingPrice: 119,
        image: "/images/mousepad.jpg",
      },
    ],
  },
  {
    id: "bundles",
    name: "Bundles",
    description: "Curated bundles for every occasion",
    startingPrice: 499,
    image: "/images/bundle-category.jpg",
    items: [
      {
        id: "bundle-1",
        name: "Couple Bundle",
        description: "Couple Bundle",
        startingPrice: 499,
        image: "/images/couple-bundle.jpg",
      },
      {
        id: "bundle-2",
        name: "Gift Box Bundle",
        description: "Gift Box Bundle",
        startingPrice: 599,
        image: "/images/giftbox-bundle.jpg",
      },
      {
        id: "bundle-3",
        name: "Office Bundle",
        description: "Office Bundle",
        startingPrice: 699,
        image: "/images/office-bundle.jpg",
      },
      {
        id: "bundle-4",
        name: "Premium Bundle",
        description: "Premium Bundle",
        startingPrice: 999,
        image: "/images/premium-bundle.jpg",
      },
    ],
  },
];
