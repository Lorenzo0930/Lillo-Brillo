import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Chi siamo", href: "#chi-siamo" },
  { name: "Servizi", href: "#servizi" },
  { name: "Galleria", href: "#galleria" },
  { name: "Recensioni", href: "#recensioni" },
  { name: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="logo.png"
            alt="Logo Lillo Brillo"
            className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
          />

          <span
            className={`text-lg font-black tracking-[0.18em] uppercase transition sm:text-xl ${
              scrolled ? "text-stone-900" : "text-white"
            }`}
          >
            Lillo <span className="text-brand">Brillo</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition ${
                scrolled
                  ? "text-stone-700 hover:text-stone-950"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contatti"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-black transition hover:bg-brand-hover"
          >
            Prenota ora
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
            scrolled
              ? "border-stone-200 bg-white text-stone-900"
              : "border-white/20 bg-black/20 text-white backdrop-blur-sm"
          }`}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="mb-2 flex items-center gap-3 rounded-2xl px-2 py-2"
            >
              <img
                src="/logo.png"
                alt="Logo Lillo Brillo"
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="text-lg font-black uppercase tracking-[0.18em] text-stone-900">
                Lillo <span className="text-brand">Brillo</span>
              </span>
            </a>

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-stone-800 transition hover:bg-stone-100"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contatti"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 py-3 text-base font-bold text-black transition hover:bg-brand-hover"
            >
              Prenota ora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}