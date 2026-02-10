import { ImageIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function AIImageEnhancement() {
  return (
    <Section
      id="print-optimisation"
      title="Print optimisation for your images"
      subtitle="We use tools to improve clarity of low-resolution images so prints look better — at no extra cost."
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-6 rounded-xl border border-stone-200 bg-stone-50/50 p-6 md:flex-row md:items-start md:gap-8">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary-muted text-secondary"><ImageIcon className="h-7 w-7" strokeWidth={2} />
          </span>
          <div className="space-y-4">
            <p className="text-stone-700">
              Blurry or low-quality photos can still print well. We run your
              image through a print-optimisation step that improves sharpness and
              contrast so the final product looks clearer. This is a supporting
              step — we don’t promise dramatic edits or changes to faces or
              content.
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-stone-600">
              <li>Sharpness and edge clarity</li>
              <li>Contrast and colour balance for print</li>
              <li>Reduction of compression artefacts where possible</li>
            </ul>
            <p className="rounded-lg border border-amber-200 bg-amber-50/80 px-4 py-2 text-sm text-amber-900">
              <strong>Note:</strong> Enhancement improves clarity for printing,
              not facial features or creative content.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
