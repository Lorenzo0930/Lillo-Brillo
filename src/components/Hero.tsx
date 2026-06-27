import React, { JSX, useEffect, useState } from "react";
import { motion } from "motion/react";

const objData: { src: string; url?: string }[] = [
  { src: "/WhatsApp Image 2026-05-23 at 14.52.25.jpeg" },
  { src: "/WhatsApp Image 2026-05-23 at 14.52.07.jpeg" },
  { src: "/WhatsApp Image 2026-05-23 at 14.57.31.jpeg" },
];

export default function Hero(): JSX.Element {
  const [bannerUrl, setBannerUrl] = useState<string>(objData[0].src);

  useEffect(() => {
    const rnd = Math.floor(Math.random() * objData.length);
    setBannerUrl(objData[rnd].src);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-zinc-950 text-white"
    >
      <div className="absolute inset-0">
        <img
          src={bannerUrl}
          alt="Cane appena toelettato da Lillo Brillo"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-4 pt-28 pb-24 sm:px-6 sm:pt-32 sm:pb-28 lg:px-8">
        <div className="flex w-full min-h-[calc(100svh-8rem)] flex-col justify-between">
          <div className="w-full max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-[12ch] text-4xl font-black leading-[0.95] text-balance sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Coccole e bellezza per il tuo{" "}
              <span className="text-brand italic">amico a quattro zampe</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 max-w-2xl text-sm leading-6 text-white/85 sm:mt-6 sm:text-base sm:leading-7 md:text-lg"
            >
              Trattamenti curati, attenzione ai dettagli e un ambiente sereno per
              far sentire il tuo cane pulito, tranquillo e valorizzato.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap"
            >
              <a
                href="#contatti"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand px-7 py-4 text-base font-bold text-black transition hover:bg-brand-hover sm:min-h-15 sm:px-8 sm:text-lg"
              >
                Prenota ora
              </a>

              <a
                href="#galleria"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 sm:min-h-15 sm:px-8 sm:text-lg"
              >
                Guarda i nostri lavori
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex justify-center pb-2 sm:pb-4"
          >
            <a
              href="#chi-siamo"
              className="inline-flex min-h-14 items-center gap-3 rounded-full border border-white/15 bg-black/25 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-black/35 sm:min-h-15 sm:px-7 sm:text-lg"
            >
              <span>Scorri</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}