import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "QA Test Management",
    desc: "Test plan, test suite, reporting pipeline, dan integrasi CI/CD.",
    link: "https://github.com/fadlian17?tab=repositories",
    tag: "Management",
    gradient: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    title: "E-Commerce Automation",
    desc: "UI Regression untuk storefront dan checkout dengan Selenium + CI.",
    link: "https://github.com/fadlian17?tab=repositories",
    tag: "Web Automation",
    gradient: "from-fuchsia-500/20 to-fuchsia-500/5",
  },
  {
    title: "Mobile App Testing",
    desc: "End-to-end flow: onboarding, auth, transaksi—Appium + reporting.",
    link: "https://github.com/fadlian17?tab=repositories",
    tag: "Mobile",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "API Testing (Rest Assured)",
    desc: "Contract, integration, dan performance baseline untuk microservices.",
    link: "https://github.com/fadlian17?tab=repositories",
    tag: "API",
    gradient: "from-orange-500/20 to-orange-500/5",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/5 bg-gradient-to-b from-black to-zinc-900/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Proyek Unggulan</h2>
            <p className="mt-2 text-zinc-400">
              Galeri singkat beberapa pekerjaan yang relevan untuk kebutuhan QA.
            </p>
          </div>
          <a
            href="https://github.com/fadlian17?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/20 md:inline-flex"
          >
            <Github size={16} /> Semua Repo
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b ${p.gradient} p-5`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-2xl transition group-hover:scale-125" />
              <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1 text-xs text-zinc-200 ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" /> {p.tag}
              </div>
              <div className="text-lg font-semibold text-white">{p.title}</div>
              <div className="mt-1 text-sm text-zinc-400">{p.desc}</div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-300">
                <Github size={16} /> Lihat di GitHub
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
