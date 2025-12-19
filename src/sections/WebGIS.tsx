import { useMemo, useState } from "react";
import clsx from "clsx";
import { webgisData, type WebgisProject } from "../data/webgis";

export default function WebGIS() {
  const projects = useMemo(() => webgisData.projects ?? [], []);

  return (
    <section id="webgis" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold uppercase">
            {webgisData.heading.title}
          </h2>
          <div className="mt-4 h-[3px] w-10 bg-tertiary mx-auto" />
          <p className="mt-6 text-white/90">
            {webgisData.heading.description.split("Click to Explore!")[0]}
            <b>Click to Explore!</b>
          </p>
        </div>

        {/* render all projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCarousel key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCarousel({ project }: { project: WebgisProject }) {
  const slides = project.slides ?? [];
  const [idx, setIdx] = useState(0);

  const hasSlides = slides.length > 0;

  const next = () => {
    if (!hasSlides) return;
    setIdx((v) => (v + 1) % slides.length);
  };

  const prev = () => {
    if (!hasSlides) return;
    setIdx((v) => (v - 1 + slides.length) % slides.length);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 relative">
      {/* Title */}
      <div className="mb-3">
        <h3 className="font-heading text-xl font-bold uppercase">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-white/80 text-sm mt-1">{project.subtitle}</p>
        )}
      </div>

      {/* CTA */}
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="block text-center font-semibold uppercase tracking-widest bg-primary px-4 py-5 rounded-xl hover:bg-tertiary hover:text-primary transition"
      >
        {project.ctaLabel}
      </a>

      {/* Slider */}
      <div className="mt-4 relative overflow-hidden rounded-xl border border-white/10">
        {hasSlides ? (
          <>
            <div className="absolute left-3 top-3 text-xs bg-black/50 px-2 py-1 rounded">
              {idx + 1} / {slides.length}
            </div>

            <img
              src={slides[idx].src}
              alt={slides[idx].alt}
              className="w-full h-auto"
              loading="lazy"
            />

            {slides.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white px-4 py-5 text-xl"
                  aria-label="Previous"
                  type="button"
                >
                  &#10094;
                </button>
                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white px-4 py-5 text-xl"
                  aria-label="Next"
                  type="button"
                >
                  &#10095;
                </button>
              </>
            )}
          </>
        ) : (
          <div className="p-10 text-center text-white/70">
            No slides available yet.
          </div>
        )}
      </div>

      {/* Caption */}
      {hasSlides && (
        <div className="text-center text-white/90 mt-3">{slides[idx].alt}</div>
      )}

      {/* Thumbnails */}
      {hasSlides && slides.length > 1 && (
        <div className="mt-4 grid grid-cols-5 gap-2">
          {slides.map((s, i) => (
            <button
              key={`${project.id}-${s.alt}-${i}`}
              onClick={() => setIdx(i)}
              className="group"
              type="button"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className={clsx(
                  "w-full h-auto border rounded-md transition",
                  i === idx
                    ? "opacity-100 border-tertiary"
                    : "opacity-60 border-white/10 group-hover:opacity-100"
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
