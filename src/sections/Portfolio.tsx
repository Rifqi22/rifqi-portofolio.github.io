import { useMemo, useState } from "react";
import clsx from "clsx";
import Lightbox from "../components/Lightbox";
import { portfolioItems } from "../data/portfolio";
import type { PortfolioCategory, PortfolioItem } from "../data/portfolio";

type Filter = "all" | PortfolioCategory;

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("college");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return portfolioItems;
    return portfolioItems.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="py-16 bg-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold uppercase">
            Portfolio
          </h2>
          <div className="mt-4 h-[3px] w-10 bg-tertiary mx-auto" />
          <p className="mt-6 text-white/90">
            Here are products that i have made
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex rounded-md bg-primary px-2 py-2 border border-white/10 gap-2">
            <FilterBtn
              active={filter === "college"}
              onClick={() => setFilter("college")}
            >
              College Project
            </FilterBtn>
            <FilterBtn
              active={filter === "professional"}
              onClick={() => setFilter("professional")}
            >
              Professional Experience
            </FilterBtn>
            <FilterBtn
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All
            </FilterBtn>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((it) => (
            <button
              key={it.id}
              onClick={() => setLightbox(it)}
              className="text-left rounded-2xl overflow-hidden border border-white/10 bg-[#45505b]/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group"
            >
              <div className="relative">
                <img
                  src={it.image}
                  alt={it.subtitle}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                {/* corners like your old CSS */}
                <div className="pointer-events-none absolute left-4 top-4 w-10 h-10 border-l-2 border-t-2 border-white/60 opacity-0 group-hover:opacity-100 transition" />
                <div className="pointer-events-none absolute right-4 bottom-4 w-10 h-10 border-r-2 border-b-2 border-white/60 opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-lg">{it.title}</h4>
                <p className="text-sm text-white/80 uppercase">{it.subtitle}</p>
                <div className="mt-3 text-tertiary text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                  Click to preview
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.image}
          alt={lightbox.subtitle}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}

function FilterBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase transition",
        active ? "text-tertiary" : "text-white/80 hover:text-tertiary"
      )}
    >
      {children}
    </button>
  );
}
