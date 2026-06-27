export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#f6f3eb]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-4">
          <img
            src="logo.png"
            alt="Logo Lillo Brillo"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <p className="text-lg font-black uppercase tracking-[0.18em] text-stone-900">
              Lillo <span className="text-brand-dark normal-case">Brillo</span>
            </p>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              Toelettatura per cani a Lanciano, cura, attenzione e trattamenti su misura.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-stone-600">
          <a href="#chi-siamo" className="transition hover:text-stone-900">
            Chi siamo
          </a>
          <a href="#servizi" className="transition hover:text-stone-900">
            Servizi
          </a>
          <a href="#galleria" className="transition hover:text-stone-900">
            Galleria
          </a>
          <a href="#recensioni" className="transition hover:text-stone-900">
            Recensioni
          </a>
          <a href="#contatti" className="transition hover:text-stone-900">
            Contatti
          </a>
        </div>
      </div>
    </footer>
  );
}