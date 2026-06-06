import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Galleria', href: '#galleria' },
    { name: 'Dove Trovarci', href: '#contatti' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200 shadow-sm">
      <div className="max-w-[1700px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-20 xl:h-24">
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href= "#hero">
              <img src="/logo.png" alt="Lillo Brillo Logo" className="w-12 h-12 xl:w-14 xl:h-14 object-contain" />
            </a>
            <span className="font-sans text-xl xl:text-2xl font-extrabold text-stone-800 tracking-tight">
              Lillo Brillo
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 xl:space-x-12">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-brand-dark font-semibold xl:text-lg 2xl:text-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/390872717634?text=Salve,%20vorrei%20prenotare."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-stone-900 px-5 py-2 xl:px-8 xl:py-3 rounded-full font-semibold xl:text-lg 2xl:text-xl hover:bg-brand-hover transition-colors"
            >
              Contattaci
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-brand-dark focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-brand-dark hover:bg-stone-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
