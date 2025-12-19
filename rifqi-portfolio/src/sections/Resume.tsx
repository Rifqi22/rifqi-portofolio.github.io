import { resumeData } from "../data/resume";

export default function Resume() {
  return (
    <section id="resume" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold uppercase">
            {resumeData.heading.title}
          </h2>
          <div className="mt-4 h-[3px] w-10 bg-tertiary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column: Summary + Education */}
          <div>
            {resumeData.sections
              .filter((s) => s.key === "summary" || s.key === "education")
              .map((section) => (
                <div key={section.key}>
                  <h3
                    className={`font-heading text-2xl mb-4 ${
                      section.key !== "summary" ? "mt-10" : ""
                    }`}
                  >
                    {section.title}
                  </h3>

                  {section.items.map((item, idx) => (
                    <TimelineItem
                      key={`${section.key}-${idx}-${item.title}`}
                      title={item.title}
                      subtitle={item.subtitle}
                      meta={item.meta}
                    >
                      {renderContent(item)}
                    </TimelineItem>
                  ))}
                </div>
              ))}
          </div>

          {/* Right column: Experience */}
          <div>
            {resumeData.sections
              .filter((s) => s.key === "experience")
              .map((section) => (
                <div key={section.key}>
                  <h3 className="font-heading text-2xl mb-4">
                    {section.title}
                  </h3>

                  {section.items.map((item, idx) => (
                    <TimelineItem
                      key={`${section.key}-${idx}-${item.title}`}
                      title={item.title}
                      subtitle={item.subtitle}
                      meta={item.meta}
                    >
                      {renderContent(item, { preferList: true })}
                    </TimelineItem>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function renderContent(
  item: { content?: string | string[]; render?: React.ReactNode },
  opts?: { preferList?: boolean }
) {
  if (item.render) return item.render;
  if (!item.content) return null;

  // string => paragraf
  if (typeof item.content === "string") {
    return <p className="text-white/90">{item.content}</p>;
  }

  // string[] => bisa list atau “paragraph blocks”
  // untuk experience enaknya list bullet
  if (opts?.preferList) {
    return (
      <ul className="list-disc pl-5 space-y-2 text-white/90">
        {item.content.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    );
  }

  // untuk education (MBUS) lebih cocok jadi blok teks
  return (
    <div className="space-y-2 text-white/90">
      {item.content.map((line, i) =>
        line.trim() === "" ? (
          <div key={i} className="h-2" />
        ) : line.startsWith("**") && line.endsWith("**") ? (
          <p key={i} className="text-tertiary font-semibold">
            {line.replaceAll("**", "")}
          </p>
        ) : line.startsWith("- ") ? (
          <p key={i} className="text-white/80 text-sm">
            {line.replace("- ", "• ")}
          </p>
        ) : (
          <p key={i} className="text-white/80 text-sm">
            {line}
          </p>
        )
      )}
    </div>
  );
}

function TimelineItem({
  title,
  subtitle,
  meta,
  children,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-tertiary ml-2">
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-tertiary" />
      <div className="space-y-2">
        <h4 className="uppercase font-semibold text-tertiary">{title}</h4>
        {meta && (
          <div className="inline-block text-sm font-semibold bg-primary px-3 py-1 rounded-lg">
            {meta}
          </div>
        )}
        {subtitle && <p className="text-white/80 italic">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
