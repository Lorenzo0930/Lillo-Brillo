import { MapPin, Phone, Clock, Mail, Instagram, Facebook, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contatti" className="py-24 xl:py-32 bg-stone-100">
      <div className="max-w-[1700px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          
          <div>
            <h2 className="text-4xl xl:text-6xl 2xl:text-7xl font-sans font-extrabold text-stone-900 mb-6">
              Dove Trovarci & Contatti
            </h2>
            <p className="text-lg xl:text-2xl 2xl:text-3xl text-stone-600 mb-12 xl:mb-16 leading-relaxed">
              Siamo a Lanciano, pronti ad accogliere il tuo cane per un trattamento speciale. 
              Contattaci per prenotare un appuntamento o per richiedere informazioni.
            </p>

            <div className="space-y-8 xl:space-y-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 xl:w-16 xl:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-brand-dark">
                  <MapPin size={24} className="xl:w-8 xl:h-8" />
                </div>
                <div>
                  <h3 className="text-lg xl:text-2xl 2xl:text-3xl font-semibold text-stone-900 mb-1">Indirizzo</h3>
                  <p className="text-stone-600 xl:text-lg 2xl:text-xl">Lanciano (CH) 66034</p>
                  <p className="text-sm xl:text-base text-stone-500 mt-1">Abruzzo, Italia</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 xl:w-16 xl:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-brand-dark">
                  <Phone size={24} className="xl:w-8 xl:h-8" />
                </div>
                <div>
                  <h3 className="text-lg xl:text-2xl 2xl:text-3xl font-semibold text-stone-900 mb-1">Telefono</h3>
                  <a href="tel:0872717634" className="text-stone-600 xl:text-lg 2xl:text-xl hover:text-brand-dark transition-colors font-medium">
                    0872717634
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 xl:w-16 xl:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-brand-dark">
                  <Clock size={24} className="xl:w-8 xl:h-8" />
                </div>
                <div>
                  <h3 className="text-lg xl:text-2xl 2xl:text-3xl font-semibold text-stone-900 mb-1">Orari di Apertura</h3>
                  <p className="text-stone-600 xl:text-lg 2xl:text-xl">Lunedì - Sabato: 09:00 - 18:00</p>
                  <p className="text-stone-600 xl:text-lg 2xl:text-xl">Domenica: Chiuso</p>
                  <p className="text-sm xl:text-base text-stone-500 mt-1">Gli orari potrebbero subire variazioni</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 xl:w-16 xl:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-brand-dark">
                  <Mail size={24} className="xl:w-8 xl:h-8" />
                </div>
                <div>
                  <h3 className="text-lg xl:text-2xl 2xl:text-3xl font-semibold text-stone-900 mb-1">Email</h3>
                  <a href="mailto:lillobrillo2007@libero.it" className="text-stone-600 xl:text-lg 2xl:text-xl hover:text-brand-dark transition-colors font-medium">
                    lillobrillo2007@libero.it
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 xl:w-16 xl:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-brand-dark">
                  <ShieldCheck size={24} className="xl:w-8 xl:h-8" />
                </div>
                <div>
                  <h3 className="text-lg xl:text-2xl 2xl:text-3xl font-semibold text-stone-900 mb-1">PEC</h3>
                  <a href="mailto:lillobrillo@legalmail.it" className="text-stone-600 xl:text-lg 2xl:text-xl hover:text-brand-dark transition-colors font-medium">
                    lillobrillo@legalmail.it
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 xl:mt-16 flex gap-5">
              <a href="https://www.instagram.com/lillo.brillo.9/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="w-12 h-12 xl:w-16 xl:h-16 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-brand hover:text-stone-900 transition-colors shadow-sm">
                <Instagram size={20} className="xl:w-7 xl:h-7" />
              </a>
              <a href="https://www.facebook.com/lillo.brillo.9" className="w-12 h-12 xl:w-16 xl:h-16 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-brand hover:text-stone-900 transition-colors shadow-sm">
                <Facebook size={20} className="xl:w-7 xl:h-7" />
              </a>
            </div>
          </div>

          <div className="h-[500px] lg:h-auto lg:min-h-[600px] xl:min-h-[750px] 2xl:min-h-[850px] rounded-3xl xl:rounded-[2.5rem] overflow-hidden shadow-lg border border-stone-200">
            <iframe
              title="Mappa Lillo Brillo"
              src="https://maps.google.com/maps?q=Lillo%20Brillo%20SNC%20Lanciano&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
