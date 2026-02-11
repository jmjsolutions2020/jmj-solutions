"use client";

import { Section } from "@/components/ui/Section";
import { StarsIcon } from "lucide-react";

export function AIImageEnhancement() {
  return (
    <Section id="ai-retouch">
      <div className="flex lg:flex-row flex-col lg:justify-between items-center gap-12 lg:gap-28">
        {/* Left Side - Text */}
        <div className="flex flex-col items-start text-4xl md:text-6xl font-bold leading-snug">
          <h2 className="relative after:content-[''] after:md:w-40 after:w-24 after:md:h-2 after:h-1.5 after:bg-primary after:absolute after:top-8/10 after:left-0">
            Better photos.
          </h2>
          <h2 className="relative after:content-[''] after:md:w-40 after:w-24 after:md:h-2 after:h-1.5 after:bg-primary after:absolute after:top-8/10 after:left-0">
            Better prints.
          </h2>
          <h2>No extra effort.</h2>
        </div>

        {/* Right Side - Image + caption */}
        <div className="flex-1 w-full">
          {/* Top-right badge */}
          <div className="lg:justify-self-end mb-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-1.5 pr-3 py-1 text-sm font-medium shadow">
              <span className="bg-primary-muted p-2 rounded-full">
                <StarsIcon className="h-4 w-4 text-primary" />
              </span>
              <span>AI Image Retouch</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm w-full max-w-3xl">
            <div className="relative w-full h-64 md:h-80 lg:h-96"></div>
          </div>

          <div className="mt-6 max-w-2xl text-stone-700 pl-2">
            <p className="mb-4 font-medium text-lg">
              Not all photos are perfect — and that’s okay.
            </p>
            <p>
              We use AI-assisted image enhancement to improve clarity,
              sharpness, and resolution of ordinary or low-quality images so
              they look better when printed on gifts.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
