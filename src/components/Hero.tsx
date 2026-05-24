import React, { JSX, useEffect, useState } from 'react';
import { motion } from 'motion/react';

// dati ritornati da una ipotetica fetch / ajax
const objData: { src: string; url?: string }[] = [
  { src: '/WhatsApp Image 2026-05-23 at 14.52.25.jpeg' },
  { src: '/WhatsApp Image 2026-05-23 at 14.52.07.jpeg' },
  { src: '/WhatsApp Image 2026-05-23 at 14.57.31.jpeg' }
];

export default function Hero(): JSX.Element {
  const [bannerUrl, setBannerUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const rnd = Math.floor(Math.random() * objData.length);
    setBannerUrl(objData[rnd].src);
  }, []);

  return (
    <section className="relative pt-28 pb-16 lg:pt-0 lg:pb-0 lg:min-h-screen flex items-center overflow-hidden xl:py-24 2xl:py-32">
      <div className="w-full max-w-[1700px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl xl:text-8xl 2xl:text-[6.5rem] 2xl:leading-[1.1] font-sans font-extrabold text-stone-900 leading-tight mb-8">
              Coccole e bellezza per il tuo <span className="text-brand-dark italic">amico a quattro zampe</span>
            </h1>
            <p className="text-lg xl:text-2xl 2xl:text-3xl text-stone-600 mb-10 max-w-2xl xl:max-w-4xl mx-auto lg:mx-0 leading-relaxed">
              Da Lillo Brillo offriamo un servizio di toelettatura professionale, 
              con amore e pazienza, per far splendere il tuo cane e farlo sentire al meglio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 justify-center lg:justify-start">
              <a
                href="https://wa.me/390872717634?text=Salve,%20vorrei%20maggiori%20informazioni%20o%20prenotare%20un%20appuntamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 text-lg xl:text-xl 2xl:text-2xl font-semibold rounded-full text-stone-900 bg-brand hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20"
              >
                Contattaci Ora
              </a>
              <a
                href="#galleria"
                className="inline-flex justify-center items-center px-8 py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 text-lg xl:text-xl 2xl:text-2xl font-semibold rounded-full text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 transition-colors"
              >
                Guarda i Nostri Lavori
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="aspect-[4/5] xl:aspect-[5/6] 2xl:aspect-[1/1] w-full max-h-[75vh] 2xl:max-h-[85vh] rounded-3xl xl:rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                alt="Cane Hero"
                src={bannerUrl}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-100 rounded-full -z-10 blur-3xl opacity-70"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-light rounded-full -z-10 blur-3xl opacity-70"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
