import { aboutData } from "../data/about";

export default function About() {
  const BASE = import.meta.env.BASE_URL;
  const imgSrc = `${BASE}${aboutData.profileImage.src}`;

  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold uppercase">
            {aboutData.title}
          </h2>
          <div className="mt-4 h-[3px] w-10 bg-tertiary mx-auto" />

          <p className="mt-6 text-white/90">
            {aboutData.intro.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3">
            <img
              src={imgSrc}
              alt={aboutData.profileImage.alt}
              className="w-full rounded-2xl border border-white/10 shadow-lg"
            />
          </div>

          <div className="lg:col-span-9">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
                <ul className="space-y-4">
                  {aboutData.left.map((it) => (
                    <li key={it.label}>
                      <span className="text-tertiary font-semibold">
                        {it.label}:
                      </span>{" "}
                      {it.value}
                    </li>
                  ))}
                </ul>

                <ul className="space-y-4">
                  {aboutData.right.map((it) => (
                    <li key={it.label}>
                      <span className="text-tertiary font-semibold">
                        {it.label}:
                      </span>{" "}
                      {it.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
