"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-green-50 via-white to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-12 border border-green-100">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">
            J
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-green-400">
              Customized Gifts Studio
            </p>
            <h1 className="text-2xl font-semibold text-slate-900">
              JMJ Solutions
            </h1>
          </div>
        </div>

        {/* Hero Text */}
        <section className="space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
            A more personal way to{" "}
            <span className="text-green-500">say it with gifts</span> is
            on its way.
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl">
            We are crafting a curated experience for customized gifts, hampers,
            and personalized surprises that make every occasion truly memorable.
            Our new website will be live very soon. Please check back here in the
            coming days for the full experience.
          </p>
        </section>

        {/* Highlights / Features */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-xs md:text-sm">
          <div className="rounded-2xl bg-green-50/80 border border-green-100 p-4">
            <p className="font-semibold text-green-700 mb-1">Personalized Gifts</p>
            <p className="text-green-900/80">
              Names, photos, and messages on hand-picked products.
            </p>
          </div>
          <div className="rounded-2xl bg-amber-50/80 border border-amber-100 p-4">
            <p className="font-semibold text-amber-700 mb-1">
              Curated Hampers
            </p>
            <p className="text-amber-900/80">
              Ready-made and custom hampers for every occasion.
            </p>
          </div>
          <div className="rounded-2xl bg-sky-50/80 border border-sky-100 p-4">
            <p className="font-semibold text-sky-700 mb-1">
              Corporate & Bulk Orders
            </p>
            <p className="text-sky-900/80">
              Thoughtful branded gifts for teams, clients, and events.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} JMJ Solutions. All rights reserved.</p>
          <div className="space-x-3">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Launching soon
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
