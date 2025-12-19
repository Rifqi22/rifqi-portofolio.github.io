import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { typedRoles } from "../data/portfolio";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const BASE = import.meta.env.BASE_URL;

export default function Hero() {
  const typedEl = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typedEl.current) return;
    const typed = new Typed(typedEl.current, {
      strings: typedRoles,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-primary"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9)), url('${BASE}assets/img/world-modern-map.jpg')`,
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* translucent overlay like your :before */}
      <div className="absolute inset-0 bg-white/40" />

      <div className="relative z-10 w-full max-w-4xl px-6 text-center lg:text-left lg:pl-40">
        <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
          M. Rifqi Naufal
        </h1>

        <div className="mt-6 space-y-2">
          <h3 className="text-lg md:text-2xl font-semibold">
            Welcome to my portfolio website!
          </h3>
          <p className="font-poppins text-base md:text-2xl">
            Hi, I'm a{" "}
            <span className="text-tertiary tracking-wide" ref={typedEl} />
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center lg:justify-start">
          <a
            href="https://drive.google.com/file/d/1sV4XU_EXqY_hIsurJnLcC2EOraifWrsi/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-primary text-secondary px-5 py-3 text-sm font-semibold hover:bg-black transition"
          >
            Download CV
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
          <a
            className="text-white hover:text-tertiary transition"
            href="https://www.facebook.com/rifqi.naufal.58760/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FiFacebook className="text-2xl" />
          </a>
          <a
            className="text-white hover:text-tertiary transition"
            href="https://www.instagram.com/iqiiiiiiiiii/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram className="text-2xl" />
          </a>
          <a
            className="text-white hover:text-tertiary transition"
            href="https://www.linkedin.com/in/mochammadrifqinaufalalfayyadh/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
