import Image from "next/image";
import { Section } from "../ui/Section";
import { BEST_SELLING_IMAGES } from "@/data/images";

const PRODUCTS = [
  {
    name: "Personalised Mug",
    src: BEST_SELLING_IMAGES.mug,
  },
  {
    name: "Custom Tshirt",
    src: BEST_SELLING_IMAGES.tshirt,
  },
];

const Bestsellers = () => {
  return (
    <div className="bg-primary">
      <Section
        id="bestsellers"
        title="Our Bestsellers"
        subtitle="Explore our most popular personalised gifts, loved by customers."
        type="primary"
      >
        <div className="mt-20 flex justify-center items-center lg:gap-20 sm:gap-16 gap-8 px-4">
            {
                PRODUCTS.map(({name, src}) => (
                    <div key={name} className="rounded-full overflow-hidden bg-white shadow-sm hover:shadow-xl w-125 max-w-3xl mb-8 aspect-square hover:scale-105 transition-transform" aria-label={name}>
                        <Image src={src} alt={name} width={450} height={450} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                ))
            }
        </div>
      </Section>
    </div>
  );
};

export default Bestsellers;
