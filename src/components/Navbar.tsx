import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Chi siamo", href: "#chi-siamo" },
  { name: "Servizi", href: "#servizi" },
  { name: "Galleria", href: "#galleria" },
  { name: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const solid = scrolled || isOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = Array.from(headerRef.current?.parentElement?.children ?? [])
      .filter((element): element is HTMLElement => element instanceof HTMLElement && element !== headerRef.current);
    const previousInert = background.map((element) => element.inert);
    background.forEach((element) => { element.inert = true; });
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element, index) => { element.inert = previousInert[index]; });
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      data-menu-open={isOpen}
      onKeyDown={(event) => {
        if (!isOpen) return;
        if (event.key === "Escape") {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
        if (event.key === "Tab") {
          const focusable = Array.from(headerRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? [])
            .filter((element) => element.getClientRects().length > 0);
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault(); last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault(); first?.focus();
          }
        }
      }}
      className={`site-header fixed inset-x-0 top-0 z-[60] transition-colors duration-500 ${
        solid
          ? "bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={() => setIsOpen(false)} className="navbar-brand flex items-center gap-3">
          <img
            src="logo.png"
            alt="Logo Lillo Brillo"
            className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
          />

          <span
            className={`text-lg font-black tracking-[0.18em] uppercase transition-colors duration-500 sm:text-xl ${
              solid ? "text-stone-900" : "text-white"
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
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden ${
            solid
              ? "border-stone-200 bg-white text-stone-900"
              : "border-white/20 bg-black/20 text-white backdrop-blur-sm"
          }`}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={22} className={`absolute transition-all duration-300 ${isOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
          <X size={22} className={`absolute transition-all duration-300 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"}`} />
        </button>
      </nav>

        <div id="mobile-menu" inert={!isOpen} aria-hidden={!isOpen} className="mobile-menu lg:hidden">
          <div className="mx-auto flex min-h-full max-w-7xl flex-col gap-2 px-4 pb-6 sm:px-6">
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
              className="mt-auto inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-brand px-5 py-3 text-base font-bold text-black transition hover:bg-brand-hover"
            >
              Prenota ora
            </a>
          </div>
        </div>
    </header>
  );
}
