import { useState } from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    // simple mailto (no SMTPJS needed)
    const to = "rifqinaufalfayyadh@gmail.com";
    const subject = encodeURIComponent(`[Portfolio] ${form.subject}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 bg-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold uppercase">Contact</h2>
          <div className="mt-4 h-[3px] w-10 bg-tertiary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <InfoCard
              icon={<FiMapPin />}
              title="Location:"
              value="Jl. Gegerkalong Girang No.116, Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat 40153"
              href="https://www.google.com/maps/place/Terminal+Ledeng/@-6.8593126,107.59287,17z/"
            />
            <InfoCard
              icon={<FiMail />}
              title="Email:"
              value="rifqinaufalfayyadh@gmail.com"
              href="mailto:rifqinaufalfayyadh@gmail.com"
            />
            <InfoCard
              icon={<FiPhone />}
              title="Whats App:"
              value="+6281911075017"
              href="http://wa.me/+6285759200639"
            />
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={submit}
              className="rounded-2xl border border-white/10 bg-primary/30 p-6 space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-3 text-sm outline-none focus:border-tertiary"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, name: e.target.value }))
                  }
                />
                <input
                  type="email"
                  className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-3 text-sm outline-none focus:border-tertiary"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                />
              </div>

              <input
                className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-3 text-sm outline-none focus:border-tertiary"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={(e) =>
                  setForm((s) => ({ ...s, subject: e.target.value }))
                }
              />

              <textarea
                className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-3 text-sm outline-none focus:border-tertiary min-h-[140px]"
                placeholder="Message"
                required
                value={form.message}
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
              />

              <div className="pt-2 flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-secondary hover:bg-tertiary hover:text-primary transition"
                >
                  Send Message
                </button>
              </div>
              <p className="text-xs text-white/60">
                (This uses <b>mailto:</b>. If you want the form to send without
                opening email client, use Formspree / Resend / EmailJS.)
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl border border-white/10 bg-primary/30 p-5 hover:border-tertiary transition"
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-tertiary text-lg">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-white/80">{value}</p>
        </div>
      </div>
    </a>
  );
}
