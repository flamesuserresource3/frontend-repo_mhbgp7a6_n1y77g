import { Rocket, Mail, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-black/60 to-black" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-200">
            <Rocket size={14} /> PREMIUM PORTFOLIO • SOFTWARE QA
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Memastikan Kualitas, Memberikan Kepercayaan
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-zinc-300 sm:text-lg">
            Saya membantu tim product merilis fitur dengan percaya diri melalui
            otomatisasi pengujian Web, Mobile, dan API yang stabil, terukur, dan
            dapat diandalkan.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 ring-1 ring-white/10 transition hover:bg-indigo-500"
            >
              <FolderGit2 size={18} /> Lihat Proyek Saya
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
            >
              <Mail size={18} /> Hubungi Saya
            </button>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-3xl" />
    </section>
  );
}
