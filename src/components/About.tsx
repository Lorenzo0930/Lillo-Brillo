import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="chi-siamo" className="w-full min-h-screen py-24 xl:py-32 bg-stone-50 flex items-center">
      <div className="w-full max-w-[1700px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-[3rem] xl:rounded-[4rem] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] border border-stone-200 min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] xl:min-h-[560px]">
              <img
                src="/WhatsApp Image 2026-05-23 at 14.52.52.jpeg"
                alt="Toelettatura cane"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
              />
              <div className="absolute top-8 right-8 w-28 h-28 rounded-full bg-brand-light blur-3xl opacity-90"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full border border-white/80 bg-white/30 blur-sm"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -left-10 -top-10 w-24 h-24 rounded-full bg-brand-light blur-3xl opacity-40"></div>
              <div className="relative bg-white border border-stone-200 rounded-[2.5rem] p-8 sm:p-10 xl:p-12 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <h2 className="text-4xl xl:text-5xl font-sans font-extrabold text-stone-900 mb-8">
                  Chi Siamo
                </h2>
                <p className="text-base xl:text-lg 2xl:text-xl text-stone-600 leading-relaxed">
                  <strong className="text-brand-dark">Lillo Brillo</strong> è una toelettatura per cani. Per noi "Lillo" è il cane per eccellenza: è quello che ti giri a guardare con stupore per strada per la sua bellezza, simpatia, eleganza ed unicità; è quello che completa la famiglia, vive con noi ed arricchisce le nostre giornate. Lillo è il cane salvato dalla strada che avrà sempre la riconoscenza nei suoi occhi. <br /><strong className="text-brand-dark">INSOMMA: Lillo è il CANE</strong>, te ne innamori e diventa la costante della tua vita. <strong className="text-brand-dark">Siamo Anna grande ed Anna piccola</strong>, da sempre accomunata dalla passione per i cani e con il tempo ne abbiamo fatto il nostro lavoro.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
