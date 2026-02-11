import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/Hero";
import { ShopByCategory } from "@/components/sections/ShopByCategory";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { AIImageEnhancement } from "@/components/sections/AIImageEnhancement";
import { CorporateGifting } from "@/components/sections/CorporateGifting";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import Bestsellers from "@/components/sections/Bestsellers";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ShopByCategory />
        <Bestsellers />
        <HowItWorks />
        <WhyChoose />
        <AIImageEnhancement />
        <CorporateGifting />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
