import { motion } from "motion/react";

const photos = [
  "/WhatsApp Image 2026-05-23 at 14.52.25.jpeg",
  "/WhatsApp Image 2026-05-23 at 14.52.07.jpeg",
  "/WhatsApp Image 2026-05-23 at 14.57.31.jpeg",
  "/WhatsApp Image 2026-05-23 at 15.04.36.jpeg",
  "/WhatsApp Image 2026-05-23 at 14.59.24.jpeg",
  "/WhatsApp Image 2026-05-23 at 14.55.10.jpeg",
];

export default function Gallery() {
  return (
    <section id="galleria" className="bg-[#fcfbf7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-dark">
            Galleria
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            I nostri clienti felici
          </h2>
          <p className="mt-6 text-base leading-8 text-stone-700 sm:text-lg">
            Qualche scatto dei nostri amici a quattro zampe dopo il loro
            trattamento di bellezza da Lillo Brillo.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className={`group overflow-hidden rounded-[28px] bg-stone-200 shadow-[0_12px_40px_rgba(0,0,0,0.06)] ${
                index === 0 || index === 3 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/4.6] overflow-hidden">
                <img
                  src={src}
                  alt={`Cane curato da Lillo Brillo ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}