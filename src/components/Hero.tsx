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
    <section className="relative flex min-h-screen items-center overflow-hidden py-24 sm:py-28 lg:py-0">
      <div className="w-full max-w-[1700px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 flex-1">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center lg:min-h-[calc(100vh-6rem)]">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left self-center flex flex-col justify-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl 2xl:leading-[1.1] font-sans font-extrabold text-stone-900 leading-tight">
              Coccole e bellezza per il tuo <span className="text-brand-dark italic">amico a quattro zampe</span>
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 xl:gap-6 justify-center lg:justify-start">
              <a
                href="https://wa.me/390872717634?text=Salve,%20vorrei%20maggiori%20informazioni%20o%20prenotare%20un%20appuntamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-4 text-base xl:text-lg 2xl:text-lg font-semibold rounded-full text-stone-900 bg-brand hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20"
              >
                Contattaci Ora
              </a>
              <a
                href="#galleria"
                className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-4 text-base xl:text-lg 2xl:text-lg font-semibold rounded-full text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 transition-colors"
              >
                Guarda i Nostri Lavori
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full self-center"
          >
            <div className="aspect-[4/5] xl:aspect-[5/6] 2xl:aspect-[1/1] w-full min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] xl:min-h-[620px] 2xl:min-h-[720px] rounded-3xl xl:rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                alt="Cane Hero"
                src={bannerUrl}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-100 rounded-full -z-10 blur-3xl opacity-70"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-light rounded-full -z-10 blur-3xl opacity-70"></div>
          </motion.div>
        </div>
      </div>

      <a
        href="#chi-siamo"
        className="absolute left-1/2 bottom-4 sm:bottom-6 lg:bottom-8 -translate-x-1/2 z-20 inline-flex items-center justify-center rounded-full border border-stone-200 bg-white/90 px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5"
      >
        <span className="mr-2 text-sm font-semibold text-stone-700">Scorri</span>
        <svg
          className="h-5 w-5 text-brand-dark animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
