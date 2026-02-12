import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import {HERO_IMAGES} from "@/data/images";

// Showcase gallery images
const SHOWCASE_IMAGES = [
  { id: "Cushion", src: HERO_IMAGES.cushion, alt: "Personalized mugs display" },
  { id: "Mugs", src: HERO_IMAGES.mugs, alt: "Heart-shaped cushion with photo" },
  { id: "tshirt", src: HERO_IMAGES.tshirt, alt: "Custom t-shirt showcase" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32">

      {/* Decorative grid positioned around hero */}
      <div className="absolute top-0 left-0 lg:left-20 pointer-events-none">
        <Image src={"/grid.svg"} alt="grid" width={500} height={500} loading="lazy" className="lg:w-full md:w-8/10 w-1/2 h-auto"></Image>
      </div>

      <div className="absolute top-40 -right-50 md:-right-10 lg:right-20 pointer-events-none">
        <Image src={"/grid.svg"} alt="grid" width={500} height={500} loading="lazy" className="lg:w-full md:w-8/10 w-1/2 h-auto"></Image>
      </div>

      {/* Decorative elements positioned around hero */}
        <div className="absolute top-10 md:top-1/10 left-5 md:left-1/10 lg:left-1/6 pointer-events-none">
          <Image src={"/heart.svg"} alt="heart" width={100} height={100} loading="lazy" className="lg:w-10 md:w-8 w-6 lg:h-10 md:h-8 h-6"></Image>
        </div>

        <div className="absolute top-4/10 md:top-1/3 lg:top-3/10 left-1/10 md:left-2/10 pointer-events-none">
          <Image src={"/bunny-rabbit.svg"} alt="heart" width={100} height={100} loading="lazy" className="lg:w-18 md:w-16 w-12 lg:h-18 md:h-16 h-12"></Image>
        </div>

        <div className="absolute top-10 lg:top-1/10 right-0 md:right-1/10 lg:right-1/6 pointer-events-none">
          <Image src={"/gift.svg"} alt="heart" width={100} height={100} loading="lazy" className="lg:w-25 md:w-22 w-16 lg:h-25 md:h-22 h-16"></Image>
        </div>

        <div className="absolute top-[35%] md:top-3/10 right-2/10 pointer-events-none">
          <Image src={"/magic-wand.svg"} alt="heart" width={100} height={100} loading="lazy" className="lg:w-12 md:w-10 w-6 lg:h-12 md:h-10 h-6"></Image>
        </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Main Content Container */}
        <div className="flex flex-col items-center text-center">
          
          {/* Main Heading with "Personal" in italics */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-900 leading-tight mb-6">
            Surprise Them
            <br />
            With Something <span className="italic font-serif font-light">Personal</span>
          </h1>

          {/* Description */}
          <p className="mb-12 max-w-2xl text-stone-600 text-base md:text-lg leading-relaxed">
            Custom mugs, cushions, t-shirts & more — quality prints, budget
            prices, fast local delivery in Gurugram.
          </p>

          {/* CTA Button - Using the updated large pill-shaped button */}
          <Button
            className="mb-12"
          >
            <Link href="https://wa.me/919971047797?text=Hello%20JMJ%20Solutions%2C%20I%20would%20like%20to%20place%20an%20order.">
            Order Your Gift</Link>
          </Button>

          {/* Gallery Showcase - 3 images in rounded container */}
          <div className="relative w-full mt-10">
              <div className="flex justify-center items-end gap-0">
                {SHOWCASE_IMAGES.map((image, index) => (
                  <div
                    key={image.id}
                    className={`relative shrink-0 rounded-2xl md:rounded-3xl md:shadow-xl aspect-4/5 shadow-lg ${
                      index === 1 ? "z-10 w-4/10" : "w-3/10"
                    } ${index === 0 ? "md:translate-x-6 translate-x-3" : index === 2 ? "md:-translate-x-6 -translate-x-3" : ""}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={400}
                      loading="lazy"
                      className="w-full h-full object-cover bg-white/50 backdrop-blur-2xl rounded-3xl"
                    />
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </header>
  );
}
