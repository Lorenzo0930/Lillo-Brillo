export default function Footer() {
  return (
    <footer className="bg-stone-900 py-16 xl:py-24 border-t border-stone-800">
      <div className="max-w-[1700px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white p-1.5 rounded-xl xl:rounded-2xl">
            <img src="/logo.png" alt="Lillo Brillo Logo" className="w-8 h-8 xl:w-10 xl:h-10 object-contain" />
          </div>
          <span className="font-sans text-2xl xl:text-3xl font-extrabold text-white tracking-tight">
            Lillo Brillo
          </span>
        </div>
        <p className="text-stone-400 max-w-md xl:max-w-2xl mb-8 xl:mb-10 text-base xl:text-lg 2xl:text-xl leading-relaxed">
          Il salone di toelettatura per cani a Lanciano dove la cura e l'amore per gli animali sono di casa.
        </p>
        <p className="text-stone-500 text-sm xl:text-base 2xl:text-lg">
          &copy; {new Date().getFullYear()} Lillo Brillo Toelettatura. Tutti i diritti riservati. <br />
          Lanciano (CH) 66034
        </p>
      </div>
    </footer>
  );
}
