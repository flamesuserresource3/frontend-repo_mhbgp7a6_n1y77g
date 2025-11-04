import { ShieldCheck, Clock, Workflow } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Quality as a Service",
      desc:
        "Saya mengubah proses testing menjadi keunggulan kompetitif—bukan penghambat delivery.",
    },
    {
      icon: Clock,
      title: "Faster Releases, Less Risk",
      desc:
        "Pipeline otomatis (Web, Mobile, API) memastikan regresi cepat dan peluncuran yang tenang.",
    },
    {
      icon: Workflow,
      title: "Scalable Test Architecture",
      desc:
        "Desain framework modular dengan reporting jelas, mudah di-maintain, dan siap diintegrasikan CI/CD.",
    },
  ];

  return (
    <section id="about" className="relative border-t border-white/5 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Nilai yang Saya Bawa
            </h2>
            <p className="mt-4 text-zinc-300">
              Saya berspesialisasi dalam otomatisasi pengujian untuk aplikasi Web,
              Mobile, dan API. Fokus saya adalah pengalaman pengguna yang mulus,
              metrik kualitas yang jelas, dan time-to-market yang lebih cepat.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((it, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 text-zinc-200 shadow-sm"
                >
                  <div className="mb-3 inline-flex rounded-md bg-indigo-500/20 p-2 text-indigo-200">
                    <it.icon size={18} />
                  </div>
                  <div className="font-semibold text-white">{it.title}</div>
                  <div className="mt-1 text-sm text-zinc-400">{it.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold tracking-wide text-indigo-300">
              Layanan & Keahlian Utama
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Web Automation",
                  desc: "Selenium / Playwright",
                },
                {
                  title: "Mobile App Testing",
                  desc: "Appium / Katalon",
                },
                { title: "API Testing", desc: "Postman / Rest Assured" },
                { title: "Performance", desc: "JMeter / k6" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition hover:border-indigo-500/40 hover:from-white/10"
                >
                  <div className="text-white">{c.title}</div>
                  <div className="mt-1 text-sm text-zinc-400">{c.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-sm font-medium text-zinc-300">Tech Stack</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { name: "Selenium", color: "bg-emerald-500/20", text: "text-emerald-200" },
                  { name: "Appium", color: "bg-fuchsia-500/20", text: "text-fuchsia-200" },
                  { name: "Katalon", color: "bg-lime-500/20", text: "text-lime-200" },
                  { name: "Postman", color: "bg-orange-500/20", text: "text-orange-200" },
                  { name: "JMeter", color: "bg-rose-500/20", text: "text-rose-200" },
                  { name: "CI/CD", color: "bg-sky-500/20", text: "text-sky-200" },
                ].map((t, i) => (
                  <div
                    key={i}
                    className={`inline-flex items-center gap-2 rounded-lg ${t.color} px-3 py-2 text-xs font-medium ${t.text} ring-1 ring-white/10`}
                  >
                    <span className="h-2 w-2 rounded-full bg-current" />
                    {t.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
