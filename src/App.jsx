import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-white">
      {/* Simple sticky header for quick navigation */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white">
            FADLIAN • SQA
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#about" className="hover:text-white">Tentang</a>
            <a href="#projects" className="hover:text-white">Proyek</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
          </nav>
        </div>
      </header>

      <main className="[scrollbar-gutter:stable]">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Fadlian • Software Quality Assurance
        </div>
      </footer>
    </div>
  );
}

export default App;
