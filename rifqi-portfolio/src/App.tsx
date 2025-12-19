import { useEffect, useMemo, useState } from "react";
import SidebarNav from "./components/SidebarNav";
import BackToTop from "./components/BackToTop";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import WebGIS from "./sections/Webgis";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "resume",
  "webgis",
  "portfolio",
  "contact",
] as const;

export default function App() {
  const [activeId, setActiveId] =
    useState<(typeof SECTION_IDS)[number]>("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = useMemo(
    () => [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "resume", label: "Resume" },
      { id: "portfolio", label: "Portfolio" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id as any);
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const onNavigate = (id: string) => {
    setMobileOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-primary text-secondary">
      <SidebarNav
        items={items}
        activeId={activeId}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onNavigate={onNavigate}
      />

      {/* main content (desktop left offset similar to your old #main margin-left:100px) */}
      <main className="lg:ml-[100px]">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <WebGIS />
        <Portfolio />
        <Contact />
        <Footer />
      </main>

      <BackToTop />
    </div>
  );
}
