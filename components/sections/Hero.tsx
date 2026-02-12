import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

// Decorative icons positioned around the hero
const HERO_DECORATIONS = [
  { id: "heart", icon: "❤️", top: "10%", left: "12%", size: "w-8 h-8" },
  { id: "gift", icon: "🎁", top: "8%", right: "10%", size: "w-10 h-10" },
  { id: "hand", icon: "✌️", top: "45%", left: "8%", size: "w-10 h-10" },
  { id: "sparkle", icon: "✨", top: "40%", right: "8%", size: "w-12 h-12" },
];

// Showcase gallery images
const SHOWCASE_IMAGES = [
  { id: "cushion", src: "/images/hero-cushion.jpg", alt: "Heart-shaped cushion with photo" },
  { id: "mugs", src: "/images/hero-mugs.jpg", alt: "Personalized mugs display" },
  { id: "tshirt", src: "/images/hero-tshirt.jpg", alt: "Custom t-shirt showcase" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32">

      {/* Decorative emoji elements positioned around hero */}
      {HERO_DECORATIONS.map((decoration) => (
        <div
          key={decoration.id}
          className="absolute pointer-events-none text-4xl"
          style={{
            top: decoration.top,
            ...(decoration.left ? { left: decoration.left } : { right: decoration.right }),
          }}
        >
          {decoration.icon}
        </div>
      ))}

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
                    className={`relative shrink-0 rounded-2xl md:rounded-3xl md:shadow-xl shadow-lg ${
                      index === 1 ? "z-10 w-4/10 aspect-4/5" : "aspect-square w-3/10"
                    } ${index === 0 ? "md:translate-x-6 translate-x-3" : index === 2 ? "md:-translate-x-6 -translate-x-3" : ""}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover bg-white/50 backdrop-blur-2xl rounded-3xl"
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
