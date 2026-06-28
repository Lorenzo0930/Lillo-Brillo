import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Instagram,
  Facebook,
  ShieldCheck,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contatti"
      className="w-full bg-stone-100 py-20 sm:py-24 xl:py-28"
    >
      <div className="mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-dark">
              Contatti
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-stone-900 sm:text-4xl xl:text-5xl">
              Dove trovarci & contatti
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg xl:text-xl">
              Siamo a Lanciano, pronti ad accogliere il tuo cane per un
              trattamento speciale. Contattaci per prenotare un appuntamento o
              per richiedere informazioni.
            </p>

            <div className="mt-10 space-y-5 xl:mt-12 xl:space-y-6">
              <div className="flex items-start gap-4 rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-stone-200/70 sm:gap-5 sm:p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark sm:h-14 sm:w-14">
                  <MapPin size={22} className="sm:h-6 sm:w-6" />
                </div>
                  <div>
                    <h3 className="text-base font-semibold text-stone-900 sm:text-lg">
                      Indirizzo
                    </h3>
                    <p className="mt-1 text-stone-600">Via Martiri del 6 Ottobre 84</p>
                    <p className="mt-1 text-sm text-stone-500 sm:text-base">
                      66034 Lanciano (CH), Italia
                    </p>

                    <a
                      href="https://www.google.com/maps/place/Lillo+Brillo+snc/@42.2205002,14.3851607,20.79z/data=!4m6!3m5!1s0x1330fc2d14c80f9d:0xbd9feeea0b10a28e!8m2!3d42.2205661!4d14.3852375!16s%2Fg%2F11b6j4lm46?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-700"
                    >
                      Indicazioni stradali
                    </a>
                  </div>
              </div>
              <div className="flex items-start gap-4 rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-stone-200/70 sm:gap-5 sm:p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark sm:h-14 sm:w-14">
                  <Phone size={22} className="sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900 sm:text-lg">
                    Telefono
                  </h3>
                  <a
                    href="tel:0872717634"
                    className="mt-1 inline-block text-stone-600 transition-colors hover:text-brand-dark"
                  >
                    0872717634
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-stone-200/70 sm:gap-5 sm:p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark sm:h-14 sm:w-14">
                  <Clock size={22} className="sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900 sm:text-lg">
                    Orari di apertura
                  </h3>
                  <p className="mt-1 text-stone-600">
                    Lunedì - Sabato: 09:00 - 18:00
                  </p>
                  <p className="mt-1 text-stone-600">Domenica: Chiuso</p>
                  <p className="mt-2 text-sm text-stone-500 sm:text-base">
                    Gli orari potrebbero subire variazioni
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-stone-200/70 sm:gap-5 sm:p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark sm:h-14 sm:w-14">
                  <Mail size={22} className="sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900 sm:text-lg">
                    Email
                  </h3>
                  <a
                    href="mailto:lillobrillo2007@libero.it"
                    className="mt-1 inline-block break-all text-stone-600 transition-colors hover:text-brand-dark"
                  >
                    lillobrillo2007@libero.it
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-stone-200/70 sm:gap-5 sm:p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark sm:h-14 sm:w-14">
                  <ShieldCheck size={22} className="sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900 sm:text-lg">
                    PEC
                  </h3>
                  <a
                    href="mailto:lillobrillo@legalmail.it"
                    className="mt-1 inline-block break-all text-stone-600 transition-colors hover:text-brand-dark"
                  >
                    lillobrillo@legalmail.it
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4 xl:mt-12">
              <a
                href="https://www.instagram.com/lillo.brillo.9/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-800 text-white transition-colors hover:bg-brand hover:text-stone-900 sm:h-14 sm:w-14"
                aria-label="Instagram Lillo Brillo"
              >
                <Instagram size={20} className="sm:h-6 sm:w-6" />
              </a>

              <a
                href="https://www.facebook.com/lillo.brillo.9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-800 text-white transition-colors hover:bg-brand hover:text-stone-900 sm:h-14 sm:w-14"
                aria-label="Facebook Lillo Brillo"
              >
                <Facebook size={20} className="sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-lg">
            <div className="h-[320px] sm:h-[420px] lg:h-full lg:min-h-[620px]">
              <iframe
                title="Mappa Lillo Brillo"
                src="https://maps.google.com/maps?q=Lillo%20Brillo%20SNC%20Lanciano&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}