import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "../ui/Button";
import Link from "next/link";
import { CORPORATE_IMAGES } from "@/data/images";

export function CorporateGifting() {
  return (
    <Section id="corporate" className="md:my-20">
      <div className="grid grid-cols-1 gap-20 lg:gap-8 lg:grid-cols-2 lg:items-center">
        {/* Left: Heading + CTA */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Corporate Gifting That Gets Noticed</h2>

          <p className="max-w-md text-stone-700 -mt-2">
            We work with HR and events teams to create branded gifts for events,
            onboarding, client giveaways, and trade shows.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <Link href={"#contact"}
            >
              <Button variant="primary">Request Bulk Quote</Button>
            </Link>

            <a href="https://wa.me/919971047797" aria-label="WhatsApp" className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-green-500 text-white shadow">
              <BsWhatsapp size={20}/>
            </a>
          </div>
        </div>

        {/* Right: Gallery + badges */}
        <div className="relative flex flex-col gap-4 justify-center lg:justify-end">
          <ClientBadges count={10} />
          <div>
            <StackedGallery
              mainSrc={CORPORATE_IMAGES.mugs}
              thumbTop={CORPORATE_IMAGES.mugs}
              thumbBottom={CORPORATE_IMAGES.tshirts}
              alt="Corporate gifts"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function ClientBadges({ count = 10 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1 justify-end pr-2">
      <div className="flex -space-x-1.5">
        <Image src="/corporate-clients/go-fast-delivery-logo.png" alt="client" width={24} height={24} className="h-6 w-6 rounded-full border border-white shadow-sm bg-white" />
        <Image src="/corporate-clients/shushruta-genomics-logo.png" alt="client" width={24} height={24} className="h-6 w-6 rounded-full border border-white shadow-sm bg-white" />
        <Image src="/corporate-clients/puja-fashion-logo.jpg" alt="client" width={24} height={24} className="h-6 w-6 rounded-full border border-white shadow-sm bg-white" />
      </div>
      <span className="ml-2 inline-flex items-center rounded-full py-1 text-sm font-semibold">{count}+ corporate clients</span>
    </div>
  );
}



interface StackedGalleryProps {
  mainSrc: string;
  thumbTop: string;
  thumbBottom: string;
  alt?: string;
}

function StackedGallery({ mainSrc, thumbTop, thumbBottom, alt = 'Gallery' }: StackedGalleryProps) {
  return (
    <div className="relative flex flex-col md:flex-row items-start gap-4 md:aspect-video">
      <div className="rounded-2xl overflow-hidden shadow-sm w-full h-full bg-white aspect-5/4 md:aspect-auto">
        <Image src={mainSrc} alt={`${alt} main`} width={400} height={400} className="h-full w-full object-cover rounded-2xl" />
      </div>

      <div className="flex flex-row md:flex-col gap-4 justify-center w-full h-full md:w-2/6">
        <div className="rounded-xl overflow-hidden shadow-sm h-full w-full">
          <Image src={thumbTop} alt={`${alt} thumb`} width={144} height={144} className="h-full w-full object-cover grayscale bg-white" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm h-full w-full">
          <Image src={thumbBottom} alt={`${alt} thumb`} width={144} height={144} className="h-full w-full object-cover grayscale bg-white" />
        </div>
      </div>
    </div>
  );
}

