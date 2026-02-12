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
        startingPrice: 299,
        image: "/images/magic-mug.jpg",
      },
      {
        id: "mug-3",
        name: "Inner Color Mugs",
        description: "Inner Color Mugs",
        startingPrice: 199,
        image: "/images/inner-color-mug.jpg",
      },
      {
        id: "mug-4",
        name: "LED Mugs",
        description: "LED Mugs",
        startingPrice: 249,
        image: "/images/led-mug.jpg",
      },
    ],
  },
  {
    id: "cushions",
    name: "Cushions",
    description: "Comfort wrapped in memories",
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
        name: "Couple Cushions",
        description: "Couple Cushions",
        startingPrice: 499,
        image: "/images/couple-cushion.jpg",
      },
      {
        id: "cushion-3",
        name: "Magic Cushions",
        description: "Magic Cushions",
        startingPrice: 399,
        image: "/images/magic-cushion.jpg",
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
    startingPrice: 299,
    image: "/images/tshirt-category.jpg",
    items: [
      {
        id: "tshirt-1",
        name: "Dry-fit T-Shirts",
        description: "Dry-fit T-Shirts",
        startingPrice: 299,
        image: "/images/dryfit-tshirt.jpg",
      },
      {
        id: "tshirt-2",
        name: "Tees for Kids",
        description: "Tees for Kids",
        startingPrice: 379,
        image: "/images/kids-tshirt.jpg",
      },
      {
        id: "tshirt-3",
        name: "Tees with colors",
        description: "Tees with colors",
        startingPrice: 399,
        image: "/images/color-tshirt.jpg",
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Small gifts, big memories",
    startingPrice: 59,
    image: "/images/accessories-category.jpg",
    items: [
      {
        id: "acc-1",
        name: "Keychains",
        description: "Custom Keychains",
        startingPrice: 59,
        image: "/images/keychain.jpg",
      },
      {
        id: "acc-2",
        name: "Caps",
        description: "Custom Caps",
        startingPrice: 199,
        image: "/images/cap.jpg",
      },
      {
        id: "acc-3",
        name: "Friendship Bands",
        description: "Custom Friendship Bands",
        startingPrice: 99,
        image: "/images/friendship-band.jpg",
      },
    ],
  },
  {
    id: "bundles",
    name: "Bundles",
    description: "Perfectly paired gifts for every occasion",
    startingPrice: 499,
    image: "/images/bundle-category.jpg",
    items: [
      {
        id: "bundle-1",
        name: "Mugs & Sippers",
        description: "Mugs & Sippers",
        startingPrice: 499,
        image: "/images/mugs-and-sippers.jpg",
      },
      {
        id: "bundle-2",
        name: "Frames and Mirrors",
        description: "Frames and Mirrors",
        startingPrice: 599,
        image: "/images/frames-and-mirrors.jpg",
      },
      {
        id: "bundle-3",
        name: "Choose Your Own Bundle",
        description: "Choose Your Own Bundle",
        startingPrice: 699,
        image: "/images/choose-your-own-bundle.jpg",
      },
    ],
  },
];
