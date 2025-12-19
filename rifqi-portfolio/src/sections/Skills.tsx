const softskills = [
  "Planning and organizing",
  "Public speaking",
  "Communication",
  "Team work",
  "Leadership",
  "Analytical",
];
const hardskills = [
  "Geographic Information System",
  "Digital Image Processing",
  "Web Development",
  "Data Analyst",
  "Data visualization",
  "Digital image processing",
  "WebGIS Development",
];
const software = [
  "Microsoft office",
  "Arcmap, ArcGIS Pro, QGIS",
  "Visual Studio Code (HTML, CSS, Js)",
  "Google Earth Engine",
  "Global Mapper",
  "ENVI",
  "Panoply & Grads",
  "Agisoft",
  "AutoCAD",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold uppercase">Skill</h2>
          <div className="mt-4 h-[3px] w-10 bg-tertiary mx-auto" />
          <p className="mt-6 text-white/90">Here are my skill:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Softskills" items={softskills} />
          <Card title="Hardskills" items={hardskills} />
          <Card title="Software" items={software} />
        </div>
      </div>
    </section>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-primary/40 p-6">
      <h3 className="font-heading text-xl font-semibold text-secondary mb-4">
        {title}
      </h3>
      <ul className="space-y-3 text-white/90">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-2 inline-block w-2 h-2 rounded-full bg-tertiary" />
            <span className="text-sm md:text-base">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
